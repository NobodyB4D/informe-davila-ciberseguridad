# AI Copilot Instructions - informe_ibamar

## Project Overview
**informe_ibamar** is a React 19 + Vite web application for generating reports. It's a minimal, modern SPA with fast build/reload workflows and React hooks-based state management.

## Architecture & Key Files

### Core Setup
- **Entry point**: [index.html](../index.html) → [src/main.jsx](../src/main.jsx) → [src/App.jsx](../src/App.jsx)
- **Build tool**: Vite v8 with `@vitejs/plugin-react` (uses Oxc for JSX compilation)
- **Root component**: [App.jsx](../src/App.jsx) manages a counter state and renders two main sections: "Get started" guide and "Next steps" (documentation/social links)
- **Styling**: [index.css](../src/index.css) uses CSS variables for theming (light/dark mode support via `prefers-color-scheme`)

### Code Organization
```
src/
├── main.jsx           # React entry point, mounts App to #root
├── App.jsx            # Main component with state example
├── App.css            # Component-specific styles
├── index.css          # Global styles + CSS variables
└── assets/            # Static images (hero.png, react.svg, vite.svg)
```

## Development Workflows

### Installation & Running
```bash
npm install              # Install dependencies
npm run dev             # Start Vite dev server (HMR enabled)
npm run build           # Production build → dist/
npm run lint            # Run ESLint check
npm run preview         # Preview production build
```

### Hot Module Replacement (HMR)
The app uses Vite's HMR - edits to `.jsx` and `.css` files hot-reload **without full page refresh**. This is critical for the "Get started" message in App.jsx mentioning HMR testing. Do not break this workflow.

## Code Patterns & Conventions

### React Patterns
- **Hooks only**: Use `useState`, `useEffect` etc. - no class components
- **Strict Mode enabled**: App wraps in `<StrictMode>` in main.jsx (detects unsafe lifecycles)
- **JSX syntax**: `.jsx` extension for all component files

### Styling Approach
- **CSS Modules not used**: Global CSS with CSS variable theming
- **Light/dark theme**: Define color variables in `:root` and media query `prefers-color-scheme: dark`
- **Example**: `--accent: #aa3bff` (light) vs `--accent: #c084fc` (dark)

### Linting Rules
ESLint config in [eslint.config.js](../eslint.config.js) extends:
- `@eslint/js` recommended rules
- `eslint-plugin-react-hooks` (enforces hook rules like dependency arrays)
- `eslint-plugin-react-refresh` (prevents fast refresh issues)

**Critical**: Always add dependencies to `useEffect` dependency arrays. Unsafe patterns will fail ESLint checks.

## External Dependencies
- **react** ^19.2.6: Core React library (latest stable)
- **react-dom** ^19.2.6: React DOM binding
- **No external API clients or state management libraries** (Redux, Zustand, etc.)

## Build Output & Distribution
- **Output**: `dist/` folder (added to .gitignore)
- **Entry**: dist/index.html with bundled JS
- No SSR, no backend integration in current setup

## Common Tasks for AI Agents

### Adding New Pages/Components
1. Create `.jsx` file in `src/`
2. Use `useState` for local state; props for parent communication
3. Import and style with global CSS variables in `src/index.css`
4. Update App.jsx or create routing if needed (currently no router)

### Modifying Styling
1. Edit `src/index.css` for global changes or component-scoped CSS
2. Use CSS custom properties (e.g., `var(--accent)`) for consistency
3. Always test dark mode via browser DevTools (Preferences > Rendering > Emulate CSS media feature prefers-color-scheme)

### Running Linting & Builds
- Always run `npm run lint` before committing
- Run `npm run build` to verify production bundle integrity
- Test in `npm run preview` mode to catch build-time issues

## Important Notes
- **No TypeScript**: Project uses plain JavaScript (`.js`, `.jsx` files)
- **Minimal dependencies**: Only React, React-DOM, ESLint, and Vite - no heavy frameworks
- **Node version**: Check `package.json` `"type": "module"` indicates ES modules (no CommonJS)
