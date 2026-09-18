import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import AllProjects from './components/AllProjects';
import ProjectDetails from './components/ProjectDetails';
import Contact from './components/Contact';
import Footer from './components/Footer';

type ViewState = 'home' | 'all-projects' | 'project-details';

function getInitialView(): ViewState {
  if (typeof window === 'undefined') return 'home';
  const hash = window.location.hash;
  if (hash === '#projects-all') return 'all-projects';
  if (hash.startsWith('#project-detail-')) return 'project-details';
  return 'home';
}

function getInitialProjectId(): number {
  if (typeof window === 'undefined') return 1;
  const hash = window.location.hash;
  if (hash.startsWith('#project-detail-')) {
    const id = Number(hash.replace('#project-detail-', ''));
    if (!isNaN(id)) return id;
  }
  return 1;
}

function App() {
  const [currentView, setCurrentView] = useState<ViewState>(getInitialView);
  const [selectedProjectId, setSelectedProjectId] = useState<number>(getInitialProjectId);
  const [previousView, setPreviousView] = useState<ViewState>('home');

  // Listen to hash changes for browser back/forward button support and navbar link navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#projects-all') {
        setCurrentView('all-projects');
      } else if (hash.startsWith('#project-detail-')) {
        const id = Number(hash.replace('#project-detail-', ''));
        if (!isNaN(id)) {
          setSelectedProjectId(id);
          setCurrentView('project-details');
        }
      } else {
        // Return to home view for standard anchor navigation (#about, #projects, #contact, #)
        setCurrentView('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleViewAllProjects = () => {
    setPreviousView('home');
    setCurrentView('all-projects');
    window.location.hash = 'projects-all';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectProject = (id: number) => {
    setPreviousView(currentView === 'all-projects' ? 'all-projects' : 'home');
    setSelectedProjectId(id);
    setCurrentView('project-details');
    window.location.hash = `project-detail-${id}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackFromAllProjects = () => {
    setCurrentView('home');
    window.location.hash = 'projects';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackFromDetails = () => {
    if (previousView === 'all-projects') {
      setCurrentView('all-projects');
      window.location.hash = 'projects-all';
    } else {
      setCurrentView('home');
      window.location.hash = 'projects';
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
      <Navbar />
      <main>
        {currentView === 'home' && (
          <>
            <Hero />
            <About />
            <Projects
              onViewAllProjects={handleViewAllProjects}
              onSelectProject={handleSelectProject}
            />
            <Contact />
          </>
        )}

        {currentView === 'all-projects' && (
          <AllProjects
            onBackToHome={handleBackFromAllProjects}
            onSelectProject={handleSelectProject}
          />
        )}

        {currentView === 'project-details' && (
          <ProjectDetails
            projectId={selectedProjectId}
            onBack={handleBackFromDetails}
          />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
