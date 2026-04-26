# Branching & PR Guidelines

Use a consistent workflow to make collaboration predictable.

Branch naming
- feature/<short-description>
- fix/<short-description>
- chore/<short-description>
- docs/<short-description>

Pull Request checklist
- Title clearly describes the change.
- Link to an issue when relevant.
- Describe what changed and why in the PR body.
- Include screenshots or steps to reproduce UI changes.
- Run linters, tests, and build locally before opening the PR.
- Request a review from an appropriate teammate.

Merging rules
- At least one approving review (two for major changes) before merge.
- Green CI checks required (lint, tests, build).
- Use merge commits for larger features, or rebase/squash for small focused changes depending on repo policy.

Keep PRs focused and easy to review; split large work into smaller PRs when possible.