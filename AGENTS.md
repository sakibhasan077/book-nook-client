<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Stack

Next.js 16 (App Router) + React 19 + Tailwind CSS v4 + shadcn/ui (base-nova) + lucide-react v1. Single package; source lives in `src/`, and `@/*` maps to `./src/*`.

- Entrypoints: `src/app/layout.tsx`, `src/app/page.tsx` (page is still a placeholder).
- shadcn primitives go in `src/components/ui/`, presentational components in `src/components/layout/`.
- shadcn here is **base-nova style on `@base-ui/react`**, not Radix — `src/components/ui/button.tsx` wraps `ButtonPrimitive.Props` from `@base-ui/react/button`. Don't assume Radix APIs.
- `cn` (class merging) comes from the `cn` npm package; `src/lib/utils.ts` re-exports it. Both `import { cn } from "cn"` and `from "@/lib/utils"` appear in the codebase.

## Commands

- `npm run dev` — dev server (Turbopack). It also (re)writes the `nextjs-agent-rules` block at the top of this file.
- `npm run build` — full verification: Turbopack compile **plus TypeScript**. Run this before declaring work done.
- `npx tsc --noEmit` — typecheck only (fast inner loop).
- `npx eslint path/to/File.tsx` — lint a single file; `npm run lint` lints the whole repo (flat config, ESLint 9).

No test runner, formatter, or CI is configured — don't invent commands for them.

## Styling gotchas (Tailwind v4)

- No `tailwind.config.js`: the theme lives in `src/app/globals.css` via `@theme inline`, and Tailwind is wired in as the `@tailwindcss/turbopack` loader in `next.config.ts`. `globals.css` imports `shadcn/tailwind.css` for the base tokens — keep it.
- The shadcn `primary` token is **near-black** (`oklch(0.205 0 0)`), not the brand blue. Brand colors (`--color-primary: #2563eb`, `--color-heading: #172554`, `--color-success: #16a34a`) are plain `:root` vars in `globals.css` that Tailwind utilities don't map to — so `bg-primary`/`text-primary` are *not* the brand blue, and `bg-success` doesn't exist.
- Convention: use arbitrary hex values instead, e.g. `text-[#2563eb]`, `bg-[#16a34a]`, `text-[#172554]` (see `src/components/layout/Navbar.tsx`).
- `lucide-react` is v1.x (not 0.x); `Home` exists as an alias export of `House`.

## App config notes

`next.config.ts` enables `cacheComponents`, `partialPrefetching`, and the React Compiler (`reactCompiler: true`). The root layout uses the typed `LayoutProps<"/">` prop. Consult `node_modules/next/dist/docs/` before assuming an API from older Next.js versions.

## Current state

- `src/components/layout/Navbar.tsx` is a UI-only navbar (no links/handlers wired, by design) and is not yet mounted in `layout.tsx` or `page.tsx`.
