# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A linktree-style website for Jesus Village Church (예수마을교회) built with Next.js 14, React 18, Tailwind CSS v4, and TypeScript. The site displays church profile information, social media links, and an interactive Naver Map showing the church location in Suwon.

## Development Commands

```bash
# Development
npm run dev              # Start dev server at http://localhost:3000

# Building
npm run build           # Production build
npm start               # Run production build locally

# Code Quality
npm run lint            # Run ESLint
npm run lint:fix        # Auto-fix ESLint issues
npm run format          # Format all files with Prettier
npm run format:check    # Check Prettier formatting
npx tsc --noEmit        # Type check without emitting files
```

## Architecture: Feature-Sliced Design (FSD)

The codebase follows FSD architecture with strict layer separation:

### Layer Hierarchy (bottom-up)
1. **shared/** - Reusable utilities, UI components, types, and configuration
   - `config/links.json` - Single source of truth for all content (profile, links, map)
   - `lib/icons.tsx` - SVG icon components (youtube, instagram, form, etc.)
   - `types/index.ts` - Global TypeScript interfaces
   - `ui/` - Base components (Avatar)

2. **entities/** - Business entities representing domain concepts
   - `link/` - Individual link card with icon
   - `profile/` - Church profile with avatar
   - `map/` - Naver Map view with marker

3. **features/** - User-facing features composed from entities
   - `link-list/` - Renders list of LinkCard components

4. **widgets/** - Complete page sections composed from features/entities
   - `profile/` - Complete profile section
   - `map/` - Map section with address display

5. **app/** - Next.js App Router (top layer)
   - `layout.tsx` - Root layout with providers and metadata
   - `page.tsx` - Main page composing all widgets
   - `providers.tsx` - Client component wrapping NavermapsProvider

### Key Architectural Rules
- **Import direction**: Higher layers can import from lower layers, never reverse
- **Data flow**: All content lives in `shared/config/links.json`, flows down through props
- **Client components**: Must use `'use client'` directive (map, providers)
- **Server components**: Default for all other components (profile, links, page)

## Technology Stack

- **Next.js 14.2.35** with App Router
- **React 18.3.1** (Note: NOT React 19 - for Vercel Analytics compatibility)
- **Tailwind CSS v4** with PostCSS plugin
- **TypeScript 5** with strict mode
- **ESLint 8** + Prettier for code quality
- **react-naver-maps 0.1.4** for map integration

## Environment Variables

Required for Naver Maps to function:

```
NEXT_PUBLIC_NAVER_MAP_CLIENT_ID=your_naver_maps_client_id
```

Store in `.env.local` (never commit this file).

### Naver Maps Setup
1. Register at https://www.ncloud.com/
2. Console → AI·NAVER API → Application 등록
3. Register allowed domains (localhost:3000, deployment URL)
4. Copy Client ID to `.env.local`

## Content Management

**All content is managed through `src/shared/config/links.json`:**

```json
{
  "profile": { "name": "...", "bio": "...", "avatar": "/avatar.png" },
  "links": [
    { "id": "1", "title": "...", "url": "...", "icon": "youtube|instagram|form" }
  ],
  "map": {
    "address": "...",
    "lat": 37.2944,
    "lng": 127.0146,
    "zoom": 16
  }
}
```

To add/edit links, modify this JSON file. New icons must be added to `shared/lib/icons.tsx`.

## Important Constraints

### React/Next.js Version Lock
- **DO NOT upgrade to React 19** - Vercel Analytics and react-naver-maps don't support it yet
- **DO NOT upgrade to Next.js 15/16** - Stay on 14.x for stability
- If peer dependency conflicts occur, use `--legacy-peer-deps`

### Next.js 14 Limitations
- **No Geist fonts** - Use Inter or other Google Fonts
- **Config must be .mjs or .js** - Not .ts (use JSDoc types instead)
- **ESLint 8 required** - Not ESLint 9 (uses .eslintrc.json, not flat config)

### Naver Maps Integration
- Map component must be client-side (`'use client'`)
- Wrap in NavermapsProvider at app level (see `app/providers.tsx`)
- Use `react-naver-maps` hooks: `useNavermaps()`, not `window.naver`
- Hydration mismatch prevention: Use `useState` + `useEffect` for client-side rendering

## Code Style

- **Single quotes** for strings (enforced by Prettier)
- **2-space indentation**
- **Semicolons** required
- **Arrow functions**: No parens for single param (`x => x`, not `(x) => x`)
- **Max line length**: 100 characters
- Run `npm run format` before committing

## Git Workflow

**IMPORTANT: Always ask the user before creating commits.**

- Never create commits automatically
- When user asks to commit, always confirm with them first
- Ask user for commit message preferences if not specified
- Use conventional commit format with Co-Authored-By footer:
  ```
  feat: Add new feature description

  Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>
  ```

## Deployment

**Vercel** (recommended):
1. Connect GitHub repository
2. Set environment variable: `NEXT_PUBLIC_NAVER_MAP_CLIENT_ID`
3. Vercel auto-detects Next.js, no config needed

**Naver Maps domain registration**:
- Add production domain to Naver Cloud Platform allowed domains
- Without this, map will show "Authentication Failed" error

## Common Pitfalls

1. **Map not showing**: Check `.env.local` exists and Naver domain is registered
2. **Build fails on Vercel**: Check React/Next.js versions match package.json (18/14)
3. **Type errors**: Run `npx tsc --noEmit` to see full error details
4. **Lint fails**: Run `npm run format` first, then `npm run lint:fix`
5. **Hydration errors**: Ensure client components have `'use client'` directive
