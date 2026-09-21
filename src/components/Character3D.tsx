import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { MeshoptDecoder } from 'three/examples/jsm/libs/meshopt_decoder.module.js';

export interface Character3DProps {
  className?: string;
}

export default function Character3D({ className = '' }: Character3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loadingProgress, setLoadingProgress] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasError, setHasError] = useState<boolean>(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Scene Setup
    const scene = new THREE.Scene();

    // 2. Camera Setup
    const width = container.clientWidth || 360;
    const height = container.clientHeight || 420;
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 3.8);

    // Check if device is touch/mobile
    const isTouchDevice = window.matchMedia('(hover: none)').matches || window.innerWidth < 768;

    // 3. High-Performance Renderer Setup
    const renderer = new THREE.WebGLRenderer({
      antialias: !isTouchDevice, // Disable expensive antialiasing on mobile
      alpha: true,
      powerPreference: 'high-performance',
      stencil: false,
      depth: true,
    });
    // Cap pixel ratio: max 1.2 on mobile to prevent GPU thermal throttling; max 1.5 on desktop
    const maxPixelRatio = isTouchDevice ? 1.2 : 1.5;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, maxPixelRatio));
    renderer.setSize(width, height);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    container.appendChild(renderer.domElement);

    // 4. Studio Lighting System (No shadow map overhead)
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.3);
    scene.add(ambientLight);

    // Key Light (tracks cursor to create dynamic eye and glasses glints)
    const keyLight = new THREE.DirectionalLight(0xfff8ed, 2.2);
    keyLight.position.set(2.5, 3.5, 3.5);
    scene.add(keyLight);

    // Fill Light
    const fillLight = new THREE.DirectionalLight(0xcfd8dc, 1.0);
    fillLight.position.set(-3, 2, 2);
    scene.add(fillLight);

    // Rim Light (crisp backlight highlighting hair and silhouette)
    const rimLight = new THREE.DirectionalLight(0x60a5fa, 1.8);
    rimLight.position.set(0, 3, -3);
    scene.add(rimLight);

    // 5. Model Container Group
    const modelGroup = new THREE.Group();
    scene.add(modelGroup);

    // 6. Load Compressed GLB with MeshoptDecoder
    const loader = new GLTFLoader();
    loader.setMeshoptDecoder(MeshoptDecoder);

    loader.load(
      '/models/me.glb',
      (gltf) => {
        const model = gltf.scene;

        // Auto-compute bounding box to normalize scale and center model
        const box = new THREE.Box3().setFromObject(model);
        const size = box.getSize(new THREE.Vector3());
        const center = box.getCenter(new THREE.Vector3());

        const maxDim = Math.max(size.x, size.y, size.z);
        const desiredScale = 2.55 / (maxDim || 1);
        model.scale.setScalar(desiredScale);

        // Center on X and Z, set pivot point at neck level
        model.rotation.y = -Math.PI / 2; // Orient forward facing the camera
        model.position.x = -center.x * desiredScale;
        model.position.y = -center.y * desiredScale - 0.22; // Pivot anchored at neck
        model.position.z = -center.z * desiredScale;

        // Enhance materials without expensive shadow overhead
        model.traverse((child) => {
          if ((child as THREE.Mesh).isMesh) {
            const mesh = child as THREE.Mesh;
            if (mesh.material) {
              const materials = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
              materials.forEach((mat) => {
                if (mat instanceof THREE.MeshStandardMaterial) {
                  mat.envMapIntensity = 1.0;
                  mat.roughness = Math.max(mat.roughness, 0.25);
                }
              });
            }
          }
        });

        modelGroup.add(model);
        setIsLoading(false);
      },
      (xhr) => {
        if (xhr.total > 0) {
          const percent = Math.min(100, Math.round((xhr.loaded / xhr.total) * 100));
          setLoadingProgress(percent);
        }
      },
      (error) => {
        console.error('Error loading 3D character model:', error);
        setHasError(true);
        setIsLoading(false);
      }
    );

    // 7. Mouse Cursor Tracking & Dynamic Light Glint Physics
    let targetRotationX = 0;
    let targetRotationY = 0;
    let targetRotationZ = 0;
    let targetKeyLightX = 2.5;
    let targetKeyLightY = 3.5;

    const handlePointerMove = (e: MouseEvent) => {
      if (isTouchDevice || !container) return;
      const rect = container.getBoundingClientRect();
      const characterCenterX = rect.left + rect.width / 2;
      const characterCenterY = rect.top + rect.height * 0.4; // eye/head level

      // Vector from character's center to the mouse position
      const deltaX = e.clientX - characterCenterX;
      const deltaY = e.clientY - characterCenterY;

      // Normalize relative to half viewport for consistent reach
      const normX = deltaX / (window.innerWidth * 0.5);
      const normY = deltaY / (window.innerHeight * 0.5);

      // Refined, high-end micro-rotations (prevents shoulder cut-off distortion)
      targetRotationY = Math.max(-0.35, Math.min(0.35, normX * 0.32)); // Yaw: ~18 deg max
      targetRotationX = Math.max(-0.22, Math.min(0.22, normY * 0.22)); // Pitch: ~12 deg max
      targetRotationZ = Math.max(-0.06, Math.min(0.06, -normX * 0.05)); // Roll: subtle head cock

      // Move key light toward cursor to create live specular highlights on eyes and glasses
      targetKeyLightX = 2.5 + normX * 2.2;
      targetKeyLightY = 3.5 - normY * 1.8;
    };

    window.addEventListener('mousemove', handlePointerMove, { passive: true });

    // 8. Sleep Mode (IntersectionObserver): Pause rendering when scrolled out of view
    let isVisible = true;
    let animationFrameId: number;

    const animate = () => {
      if (!isVisible) return; // Completely sleep when off-screen
      animationFrameId = requestAnimationFrame(animate);

      if (!isTouchDevice) {
        // Desktop smooth spring lerping to track cursor accurately
        modelGroup.rotation.y += (targetRotationY - modelGroup.rotation.y) * 0.08;
        modelGroup.rotation.x += (targetRotationX - modelGroup.rotation.x) * 0.08;
        modelGroup.rotation.z += (targetRotationZ - modelGroup.rotation.z) * 0.08;

        // Dynamic light lerp for glinting eye reflections
        keyLight.position.x += (targetKeyLightX - keyLight.position.x) * 0.08;
        keyLight.position.y += (targetKeyLightY - keyLight.position.y) * 0.08;
      }

      renderer.render(scene, camera);
    };

    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const wasVisible = isVisible;
          isVisible = entry.isIntersecting;
          if (isVisible && !wasVisible) {
            // Wake up render loop on entering viewport
            animate();
          }
        }
      },
      { threshold: 0.05 }
    );
    intersectionObserver.observe(container);

    animate();

    // 9. Responsive Resize Observer
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width: newWidth, height: newHeight } = entry.contentRect;
        if (newWidth > 0 && newHeight > 0) {
          camera.aspect = newWidth / newHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(newWidth, newHeight);
        }
      }
    });
    resizeObserver.observe(container);

    // 10. Memory Cleanup
    return () => {
      window.removeEventListener('mousemove', handlePointerMove);
      intersectionObserver.disconnect();
      resizeObserver.disconnect();
      cancelAnimationFrame(animationFrameId);

      scene.traverse((object) => {
        if ((object as THREE.Mesh).isMesh) {
          const mesh = object as THREE.Mesh;
          mesh.geometry?.dispose();
          if (mesh.material) {
            const materials = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
            materials.forEach((mat) => mat.dispose());
          }
        }
      });

      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className={`relative flex flex-col items-center justify-center w-full aspect-square max-w-105 ${className}`}>
      {/* Ambient Theme Backlight Glow */}
      <div className="absolute inset-0 m-auto w-3/4 h-3/4 rounded-full bg-primary/25 dark:bg-primary/20 blur-3xl pointer-events-none transition-opacity duration-700" />

      {/* Loading Progress State */}
      {isLoading && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 z-20">
          <div className="w-12 h-12 rounded-full border-2 border-primary/30 border-t-primary animate-spin" />
          <p className="font-mono-custom text-xs text-gray-500 dark:text-gray-400 tracking-wider">
            Loading... {loadingProgress > 0 && `${loadingProgress}%`}
          </p>
        </div>
      )}

      {/* Error Fallback */}
      {hasError && (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 z-20">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Unable to load 3D character preview.
          </p>
        </div>
      )}

      {/* Three.js Canvas Container with Soft Bottom Dissolve Mask */}
      <div
        ref={containerRef}
        className={`w-full h-full cursor-grab active:cursor-grabbing transition-opacity duration-700 mask-[linear-gradient(to_bottom,black_60%,transparent_96%)] [-webkit-mask-image:linear-gradient(to_bottom,black_60%,transparent_96%)] ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
        aria-label="Interactive 3D character tracking cursor"
      />
    </div>
  );
}

