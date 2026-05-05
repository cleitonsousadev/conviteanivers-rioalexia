# Photo Fix Plan
Information Gathered: img/bem.png exists. App.tsx uses src=\"/img/bem.png\" (public path). Dev server active, HMR works. Photo not loading likely path/cache/import issue.

Plan: 
1. Import image as React module in src/App.tsx for Vite optimization/reliable serving.
2. Edit App.tsx: Add import BemImage from '../img/bem.png'; Replace img src.

Dependent Files: src/App.tsx only.

Followup: HMR auto-reloads. Test http://localhost:3001/.
