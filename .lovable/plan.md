
## Plan: Port Traybill's digital card 1:1, then strip em dashes & age

### Step 1 — Extract & inventory the zip
- Unzip `traybills-digital-card-lovable.zip` to a temp dir.
- Catalogue every file: routes, components, assets (images, fonts, audio), styles, config, dependencies.

### Step 2 — Bring the project into this codebase verbatim
- Copy all source files into the matching locations (`src/routes`, `src/components`, `src/assets`, `public/`, `src/styles.css`, etc.).
- Install any missing npm dependencies referenced by the original.
- Convert React Router routes to TanStack Start file-based routes if the original used a different router (one route file per page, each with its own `head()` for title/description/og tags). If it's already TanStack Start, drop files in as-is.
- Port the design tokens / theme into `src/styles.css` (oklch values), preserving the original look.
- Replace the placeholder `src/routes/index.tsx` with the original homepage.
- Copy all images/audio/fonts into `src/assets` or `public/` to match how they were referenced.

### Step 3 — Verify the copy matches
- Build & view each route to confirm the recreation matches the original visually and functionally before any edits.

### Step 4 — Apply the two content edits
- **Remove em dashes (—)**: scan all text content (route files, components, copy strings, metadata) and delete every `—` character. Tidy any resulting double spaces.
- **Remove the artist's age**: locate any reference to the artist's age (e.g. "21-year-old", "age 21", "(21)") in copy/bio sections and remove just the age phrase, leaving surrounding sentences grammatical.

### Step 5 — Final QA
- Walk every route to confirm: layout intact, no em dashes remain, no age reference remains, no broken links/images.

### Notes
- No feature changes, no redesign, no new content — strictly a port + two surgical text edits.
- Will use TanStack Start conventions (separate route files per page, per-page `head()` metadata) since that's what this project requires.
