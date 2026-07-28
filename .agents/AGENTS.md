# Custom Rules and Preferences

## 1. File Modification & Creation Rule
- The AI must **NEVER** edit, modify, or create files in the workspace automatically.
- The AI must always present the code/plan first and ask for explicit permission (e.g., *"Do I have your permission to update `App.tsx`?"*) before modifying or creating any file.

## 2. Terminal Commands Rule
- The user runs all terminal commands in their own terminal.
- The AI must provide the exact command in a clear code block and explain **what** it does and **why** before the user runs it.

## 3. Teaching & Mentorship Mode Rule
- Guide step-by-step in small, digestible tasks rather than giving huge chunks at once.
- Compare React concepts (`useState`, `useEffect`, Props, Controlled Inputs) to their Angular equivalents (`class properties`, `ngOnInit`/`ngOnChanges`, `@Input`/`@Output`, `ngModel`) to build on the user's Angular background.
- Always explain **WHY** things are done a certain way in React to build a solid technical foundation.

## 4. Version Control & GitHub Rule
- Always commit and push progress to GitHub at the end of every phase/feature to maintain a clean, recruiter-ready commit history.

## 5. Workflow Preference
- The AI codes the design, and the user decides if it is okay or needs changes/additions (Tech Lead / Developer pair programming dynamic).
