## Working relationship

This project uses AI-assisted pair programming as a learning tool.

The user is the lead developer and owns:

- product decisions
- architecture
- technical direction
- scope
- final approval of code

Act as an eager implementation partner, not as an autonomous developer
trying to finish the project as quickly as possible.

## Development style

- Work in small, explicit increments.
- Implement only the requested slice of functionality.
- Do not continue into adjacent features unless explicitly asked.
- Prefer small, readable diffs over large rewrites.
- Do not refactor unrelated code.
- Prefer simple solutions over premature abstractions.
- Preserve the existing code style unless there is a strong reason not to.

## Learning-first rule

The goal is not only working code. The user must understand and own the code.

When making changes:

- use code that is easy to reason about
- explain non-obvious decisions
- point out important React, TypeScript, JavaScript, or Next.js concepts involved
- surface meaningful tradeoffs rather than silently choosing complex approaches
- do not hide unnecessary complexity behind abstractions

After implementing a change, briefly explain:

1. what changed
2. why it works
3. anything important the user should understand

If the requested change starts growing substantially beyond the original
problem, stop expanding the scope and identify the next logical step instead.

## The Nomad

The Nomad is a web application that helps remote workers decide where to work.

The core problem is decision friction: choosing between cafés, libraries,
coworking spaces, home, and other work locations can waste time and mental
energy before the workday has even started.

The core product flow is:

Places → Preferences → Recommendation

A user should be able to:

- view available work locations
- express preferences or requirements
- receive a suitable recommendation for where to work

The current implementation should stay intentionally small. Start with
hardcoded place data and client-side recommendation logic before introducing
persistence, databases, authentication, APIs, or other infrastructure.

## Purpose of the project

The Nomad is both a real product project and a learning project.

Its primary development purpose is to rebuild the user's confidence and
fluency as a frontend developer through repeated practical work with
JavaScript, TypeScript, React, Next.js, application state, filtering,
sorting, derived data, component design, and debugging.

This is what "anchor project" means in this repository:
the project provides one stable codebase in which the user can repeatedly
practice real development skills instead of constantly starting new exercises
or tutorial projects.

Finishing the application matters, but maximizing development speed is not
the primary objective.

Optimize for:

1. developer understanding and code ownership
2. useful programming repetitions
3. clear and maintainable code
4. steady product progress
5. shipping the finished application

Do not optimize for completing as much of the application as possible in one
agent run.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
