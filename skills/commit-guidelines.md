# Commit Guidelines

Before committing code, follow these quick checks to keep the repository healthy and reviewers happy.

Checklist
- Lint and format: run the project's linter/formatter (e.g., ESLint, Prettier).
- Tests: run unit tests and fix failures.
- Build: ensure the app builds locally (if applicable).
- Scope: keep commits small and focused (one logical change per commit).
- Messages: use present-tense, short summary and optional body. Example:
  - Add: "Fix typo in question text"
  - Feature: "Add category filter to Questions view"
- No secrets: do not commit API keys, passwords, or sensitive files.

Best practices
- Use feature branches for new work; reserve `main`/`master` for release-ready code.
- Squash or rebase before merging to keep history clean when appropriate.
- Include a brief test or reproduction steps in the PR description when the change affects behavior.

Example commit message
- Title: "Fix: validate user answer before submission"
- Body: "Ensure an answer is selected before calling the submit API. Adds a small unit test to cover validation."