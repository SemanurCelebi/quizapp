# Project conventions & contributor notes

This file documents the technologies, conventions and minimal rules contributors should follow in this Vue + Tailwind quiz app. It's a concise reference to keep code consistent and easy to review.

Core technologies
- Vue 3 (Composition API preferred)
- Tailwind CSS for styling
- Pinia for application state
- TypeScript (recommended where adding or refactoring code)

Key conventions
- Always prefer the Vue 3 Composition API for new components and composables.
- Use TypeScript for new modules and components; avoid `any` unless absolutely necessary and documented.
- Prefer small, reusable composables (hooks) for shared logic instead of duplicating code across components.
- Keep components focused: presentational components vs container/logic components.

Styling
- Use Tailwind utility classes for layout and styling.
- Add small component-scoped classes or CSS only when Tailwind utilities are insufficient.

State & data
- Use Pinia for shared state. Keep stores small and focused by domain (e.g., `authentication`, `questions`).

Quality checks
- Run linters and formatters before committing (ESLint, Prettier).
- Add or update unit tests for behavior changes when feasible.
- Ensure the app builds locally after your change.

Commits & PRs
- Keep commits small and well-scoped. Use clear, present-tense commit messages.
- Open PRs from feature branches. Include a short description, testing steps, and link to any related issue.

Other notes
- Don't commit secrets or credentials. Use environment variables for keys.
- When in doubt, mirror patterns already present in the repository (folders, naming, test styles).

References
- Prefer examples and patterns from popular Vue + Tailwind starter projects and community repos when adding major features or architectural changes.

Keep changes incremental and reviewable — small PRs get merged faster and are easier to maintain.