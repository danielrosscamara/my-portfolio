# Walkthrough — Personal Portfolio Website (Daniel Ross Camara)

🎉 **Project & Revision 1 Complete!** 

Your personal portfolio is fully built, styled, typed, tested, and pushed to GitHub!

---

## 🌟 Key Features Implemented

### 🎨 Design & Branding
- **Custom Color Palette**: Branded with Indigo Blue (`#4F46E5`) primary accents.
- **Typography System**: Google Fonts loaded for **Josefin Sans** (headings), **Inter** (body text), and **JetBrains Mono** (monospace tech tags).
- **Default Light Mode**: Starts in Light mode on first visit with persistent Dark mode toggle saved in `localStorage`.
- **Background Animations**: Floating blurred background blobs with custom CSS keyframes (`animate-float` / `animate-float-rev`).
- **Hidden Scrollbars**: Global clean layout matching `nevo.dev`.

### 🛠️ 7 Categorized Technical Skill Groups
- 🔤 **Languages**: JavaScript, TypeScript, Java, Python, C++, C#
- 🎨 **Frontend**: Angular, Ionic, Tailwind CSS, Bootstrap, React
- ⚙️ **Backend & APIs**: NestJS, Node.js, REST APIs, Socket.io
- 🗄️ **Databases & ORM**: PostgreSQL, Firebase, Prisma ORM
- 🤖 **AI-Augmented Development**: Cursor, Google AI Studio, Prompt Engineering
- 🛠️ **Tools and Platforms**: Git, GitHub, Capacitor, Vercel, Vite
- ⚡ **Hardware & IoT**: IoT System Architecture, Electronic Design, Arduino, Circuit Troubleshooting

### 💼 Professional Experience Card
- **Software Developer Intern @ Ascendant Global INC. (AGI Group)** (*Feb 2026 – April 2026*)
- **Highlights**:
  - Wix-to-Custom-Stack Migration (Ionic + Angular + Tailwind CSS).
  - High-Fidelity UI/UX & CRM-connected consultation booking feature.
  - Enterprise CRM System Architecture with Kanban Sales Pipeline & revenue forecasting.
  - Role-Based Access Control (RBAC) security, Global Activity Ledger, and Socket.io live updates.
  - Automated PDF proposal engine and NestJS / Prisma ORM / PostgreSQL REST API backend.

### 📱 Responsive Components (`src/components/`)
1. **`Navbar`**: Fixed glassmorphic header (`backdrop-blur-md`), brand logo `Daniel.`, smooth-scroll navigation links, Sun/Moon theme toggle button, and mobile hamburger drawer.
2. **`Hero`**: Fullscreen landing section with animated background blobs, role badge, intro tagline, primary/ghost CTAs ("View Projects", "Contact Me"), and bouncing scroll arrow.
3. **`About`**: Two-column layout featuring developer bio, working Google Drive resume download button, AGI Group internship experience card, and 7 categorized skill groups.
4. **`Projects`**: 2-column grid displaying flagship project cards with tech stack tags, live demo buttons, and official GitHub icons (`FaGithub` from `react-icons/fa`).
5. **`Contact`**: Controlled contact form using React state (`useState`), inline submission success message, and social links (`FaGithub`, `FaLinkedin`, `FaEnvelope`).
6. **`Footer`**: Dynamic copyright year (`new Date().getFullYear()`) and stack attribution.

---

## 📂 Project Architecture

```
c:\Coding Stuff\Portfolio\
├── .agents\
│   └── AGENTS.md
├── docs\                           ← Workspace Documentation Folder
│   ├── implementation_plan.md
│   └── walkthrough.md
├── src\
│   ├── components\
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── data\
│   │   └── portfolioData.ts        ← Single source of truth for text & links
│   ├── hooks\
│   │   └── useTheme.ts             ← Custom hook for theme state & localStorage
│   ├── types\
│   │   └── portfolio.ts            ← TypeScript interfaces
│   ├── App.tsx                     ← Root component assembly
│   ├── main.tsx                    ← Entry point & theme flash fix
│   └── index.css                   ← Tailwind v4 & custom keyframe animations
├── index.html
├── package.json
└── vite.config.ts
```

---

## 🐙 Complete GitHub Commit Log

All changes committed and pushed to **[danielrosscamara/my-portfolio](https://github.com/danielrosscamara/my-portfolio)**:

1. `feat: Phase 1 & 2 — setup Vite, React, TypeScript, Tailwind v4 and Google Fonts`
2. `feat: Phase 3 — create TypeScript interfaces and portfolio data store`
3. `feat: Phase 4 — add useTheme custom hook for light/dark mode persistence`
4. `feat: add Navbar component with glassmorphism styling and dark mode toggle`
5. `feat: add Hero component with animated background blobs and CTAs`
6. `feat: add About component with bio, resume download, and skill badges`
7. `feat: add Projects component with FaGithub from react-icons`
8. `feat: add Contact component with controlled form and social links`
9. `feat: add Footer component with dynamic copyright year`
10. `feat: Phase 6 — assemble full portfolio app in App.tsx and main.tsx`
11. `feat: added resume link.`
12. `feat: update portfolio types with 7 skill categories and Experience interface`
13. `feat: populate portfolio data store with 7 skill categories, AGI Group internship, and flagship projects`
14. `feat: update About component with categorized skills and AGI Group internship`
