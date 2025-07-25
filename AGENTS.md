# Agent Guidelines for malcolmbastien.github.io

This document outlines the conventions and commands for agents operating within this repository.

## 1. Build/Lint/Test Commands

- **Build:** This project is a client-side JavaScript application. There are no explicit build commands; `game.html` and `game.js` are served directly.
- **Lint:** No dedicated linting configuration or commands are currently set up.
- **Test:** No dedicated test files or test commands are currently set up. If a test framework were introduced, running a single test would typically involve a command like `npm test -- <path_to_test_file>`.

## 2. Code Style Guidelines

- **Imports:** Use standard ES module imports (`import ... from '...'`) if modules are introduced.
- **Formatting:** Maintain consistent indentation (preferably 2 spaces) and brace style.
- **Types:** No explicit type system (e.g., TypeScript) is in use. Adhere to JavaScript's dynamic typing.
- **Naming Conventions:** Use `camelCase` for variables and functions.
- **Error Handling:** Implement basic error handling using `try...catch` for synchronous operations and `.catch()` for Promises.

## 3. Cursor/Copilot Rules

No specific Cursor or Copilot rules were found in this repository.