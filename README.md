# Portfolio React Recreation

A React recreation of my original portfolio design. This project continues the same website from the first two curriculum weeks and focuses on completing the requirements through Week 5 without introducing unrelated features.

## Stack
- React
- Vite
- Tailwind CSS CDN (the original portfolio used Tailwind)
- React Hooks: `useState`, `useEffect`, `useMemo`, and `useReducer`

## Run locally
```bash
npm install
npm run dev
```

## Curriculum evidence
- **Weeks 1–2:** Original design/content and assets were carried into the React version. Layout and styling use responsive utilities, Flexbox, and Grid.
- **Week 3:** Project category filtering uses state; filtered project lists and counts are derived. The contact form is controlled and uses a reducer to manage field values, validation errors, and submission status.
- **Week 4:** The GitHub repository section fetches public repository data. It has loading, success, empty, error, and retry states. An `AbortController` cancels the request when the component unmounts.
- **Week 5:** See `docs/week5-ai-workflow.md` for prompt comparison, AI review notes, verification checklist, and usage log. 
## Project design
The original portfolio's sections remain in the same order: Hero, About, Services, Projects, Contact, and Footer. Its images, logo, CV, and design colours are retained in `public/images`.


