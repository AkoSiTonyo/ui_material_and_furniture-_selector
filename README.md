# Room Material & Furniture Selector

## Project Overview
This project is a frontend prototype that helps users choose materials and furniture options for different room types (kitchen, bathroom, living room, bedroom, and laundry). The app provides:

- Room-based selection flows
- Live summary of selected items
- Basic estimated cost calculation from predefined option prices
- Mock AI-generated design summary with simple compatibility checks
- Print-to-PDF style summary export (via browser print dialog)
- Light/dark theme toggle with localStorage persistence

This is currently a client-side only application (no backend/API).

## Core Features
- Select a room type and see room-specific material/furniture options
- Store selections independently per room
- Show selected/unselected status for each category
- Compute total estimated cost using hardcoded price mapping
- Generate a mock AI summary with:
  - cost-level hint (low/medium/high)
  - basic design warning for dark flooring + dark wall combinations
  - missing-item reminders and next-step recommendations
- Download summary using browser print workflow

## Technologies Used
- React 19
- TypeScript 6
- Vite 8
- Tailwind CSS 4 (`@tailwindcss/vite`)
- ESLint 10 + TypeScript ESLint + React Hooks plugin
- Node.js + npm (for package management and scripts)

## Setup Instructions
### Prerequisites
- Node.js (recommended: current LTS)
- npm (comes with Node.js)

### Installation
1. Open terminal in project root:
   ```bash
   cd ui_material_and_furniture-_selector
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

## How To Run The Application Locally
### Development mode
```bash
npm run dev
```
- Starts Vite dev server (usually at `http://localhost:5173`)

### Production build
```bash
npm run build
```
- Runs TypeScript build + Vite production build

### Preview production build locally
```bash
npm run preview
```

### Lint
```bash
npm run lint
```

## Simple Testing Instructions
Automated unit tests are configured with Jest.

Run tests with:
```bash
npm run test
```

Current coverage includes basic room-selection and expected-cost calculation checks.

## Assumptions Made
- Pricing in `src/utils/Room.tsx` is sample/mock data for estimation only
- AI summary is rule-based mock logic, not connected to a real AI API
- "Download AI Summary" depends on browser print capabilities and user print settings
- Room options and price mappings are fixed/static in source code
- Application is intended as a demo/prototype and not procurement-grade software

## Notes About Limitations Or Improvements
### Current limitations
- No backend/database; all state is in-browser only
- No automated tests yet
- No authentication or user profiles
- No true PDF generation library (uses print dialog approach)
- No currency/locale configuration for cost formatting
- Component folder is named `src/components` which may reduce maintainability

### Suggested improvements
- Add test stack (Vitest + React Testing Library + Playwright)
- Add real AI integration (e.g., OpenAI API) for richer summaries
- Persist projects/selections in local storage or backend
- Add validation rules and stronger design-compatibility engine
- Add export improvements (true PDF generation, branded templates)
- Rename `src/components` to `src/components` and update imports
- Add CI pipeline for lint/build/test

## Project Structure
```text
Project/
|- public/
|  |- webicon.png
|- src/
|  |- assets/
|  |- components/
|  |- utils/Room.tsx
|  |- App.tsx
|  |- main.tsx
|  |- index.css
|- package.json
|- vite.config.ts
|- eslint.config.js
```

## Available NPM Scripts
- `npm run dev` - run development server
- `npm run test` - run Jest tests
- `npm run build` - type-check/build and create production bundle
- `npm run preview` - preview production build locally
- `npm run lint` - run ESLint checks

## Future Enhancements (Optional)
- Add multi-language support
- Add budget sliders and alternative recommendations
- Add design mood boards/images per selected style
- Add accessibility audits and UX polishing for keyboard/screen readers
