# cicd-express-demo — Week 2 Day 3 Starter

This is the **end-of-Day-2 state** of the Express API from [w2d2-cicd-github-actions.md](../../docs/w2d2-cicd-github-actions.md): a working API, a passing Jest test suite, basic ESLint config, and a single-job GitHub Actions workflow.

Use this as your starting point for [w2d3-ci-workflows.md](../../docs/w2d3-ci-workflows.md) instead of retyping yesterday's app — today's lesson is about the **pipeline**, not the API.

## Get started

```bash
# Copy this folder out into your own project directory
cp -r modules/4-devops/codes/w2d3 ~/cicd-express-demo
cd ~/cicd-express-demo

npm install
npm test
npm run lint
```

Then follow the Week 2 Day 3 lesson to add Prettier, a coverage threshold, a Dockerfile, and a multi-job pipeline (`lint` → `test` → `build` → `quality-gate`) on top of what's here.

## What's already here

- `server.js` — health check, calculator, and users endpoints
- `server.test.js` — full Jest + Supertest coverage of every route
- `.eslintrc.json` — basic ESLint rules
- `jest.config.js` — Jest config for ES modules
- `.github/workflows/ci.yml` — a single `test` job (lint + test, matrix on Node 18.x/20.x)

## What you'll add today

- `.prettierrc` / `.prettierignore` and a `format:check` script
- A `coverageThreshold` in `jest.config.js`
- `Dockerfile` / `.dockerignore` for build verification
- A rewritten `ci.yml` with parallel `lint`/`test` jobs, a `build` job, and a `quality-gate` job
- Branch protection on `main` requiring all three jobs to pass
