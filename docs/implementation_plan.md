# Implementation Plan — Revision 1: Real Skills, Experience & Projects Integration

Incorporate Daniel Ross Camara's real-world **Technical Skills** (with 7 refined categories), **Professional Experience at Ascendant Global INC. (AGI Group)**, and key **Featured Projects** (Corporate Web Platform & Enterprise CRM System) into the portfolio while maintaining a simple, clean, and modern design.

---

## Technical Specifications & Finalized Choices

- Developer Name: **Daniel Ross Camara**
- Primary brand color: **Indigo Blue (`#4F46E5`)**
- Default theme: **Light mode** (with dark mode toggle saved in `localStorage`)
- Heading font: **Josefin Sans** (Google Fonts)
- Monospace font: **JetBrains Mono** (Google Fonts) — used for tech tags and badges
- Body font: **Inter** (Google Fonts)
- Resume: Google Drive link (`https://drive.google.com/file/d/1SFfd6FU3PSKIwFc47jqBxrB4UU0_XnOl/view?usp=sharing`)

---

## ⚠️ Critical Rules (MUST FOLLOW)
1. **NEVER** create or modify any file without explicit user permission.
2. **NEVER** run any terminal command automatically. Always provide the exact command in a code block for the user to run.
3. Always explain **what** a command does and **why** before the user runs it.
4. Teach React concepts by comparing them to Angular equivalents.
5. Commit and push to GitHub after every file modification.

---

## Project Folder Structure

```
c:\Coding Stuff\Portfolio\
├── .agents\
│   └── AGENTS.md                   ← AI rules
├── docs\                           ← Documentation folder
│   ├── implementation_plan.md      ← Implementation plan
│   └── walkthrough.md              ← Project walkthrough
├── public\
│   └── favicon.svg
├── src\
│   ├── components\
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── data\
│   │   └── portfolioData.ts        ← Data store
│   ├── hooks\
│   │   └── useTheme.ts             ← Dark/light mode toggle logic
│   ├── types\
│   │   └── portfolio.ts            ← TypeScript interfaces
│   ├── App.tsx                     ← Root component
│   ├── main.tsx                    ← Entry point
│   └── index.css                   ← Global Tailwind + custom CSS
├── index.html                      ← Root HTML file
├── package.json
└── vite.config.ts
```

---

## Technical Skills Categorization

1. 🔤 **Languages**: JavaScript, TypeScript, Java, Python, C++, C#
2. 🎨 **Frontend**: Angular, Ionic, Tailwind CSS, Bootstrap, React
3. ⚙️ **Backend & APIs**: NestJS, Node.js, REST APIs, Socket.io
4. 🗄️ **Databases & ORM**: PostgreSQL, Firebase, Prisma ORM
5. 🤖 **AI-Augmented Development**: Cursor, Google AI Studio, Prompt Engineering
6. 🛠️ **Tools and Platforms**: Git, GitHub, Capacitor, Vercel, Vite
7. ⚡ **Hardware & IoT**: IoT System Architecture, Electronic Design, Arduino, Circuit Troubleshooting

---

## Professional Experience
- **Software Developer Intern @ Ascendant Global INC. (AGI Group)** (*Feb 2026 – April 2026*)

---

## Featured Projects
1. **Customer Relationship Management (CRM) System**: Enterprise CRM prototype with Kanban Sales Pipeline, Socket.io live updates, RBAC security, automated PDF generation engine, NestJS/Prisma/PostgreSQL backend.
2. **Corporate Web Platform**: Enterprise web presence designed for AGI Group, migrating from Wix to a custom Ionic + Angular + Tailwind stack with integrated CRM consultation booking functionality.
3. **Budget Planner v2**: Personal finance app built with React & TypeScript.
4. **Personal Portfolio Website**: Modern single-page website built with React 18, TypeScript & Tailwind CSS v4.
