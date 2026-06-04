# dervis.dev - portfolio

Personal portfolio for Dervis van Leersum. Built with [Astro](https://astro.build),
hosted on [Codeberg Pages](https://codeberg.page/). Sci-fi / hyperspace theme.

## Develop

```bash
npm install
npm run dev        # http://localhost:4321
```

```bash
npm run build      # output to ./dist
npm run preview    # preview the production build
```

## Project structure

```
src/
├── components/        # Starfield, Nav, Footer, ProjectCard, Terminal, EasterEggs
├── layouts/           # BaseLayout (shell) + ProjectLayout (work/eng detail)
├── content/
│   ├── projects/      # software work - one .md per project
│   ├── engineering/   # civil-engineering work - one .md per item
│   └── articles/      # blog posts (or external links via `externalUrl`)
├── pages/
│   ├── index.astro    # home (hero, work grid, stack, engineering)
│   ├── about.astro
│   ├── speaking.astro
│   ├── contact.astro
│   ├── work/[...slug].astro          # generated from content/projects
│   ├── engineering/[...slug].astro   # generated from content/engineering
│   └── articles/{index,[...slug]}.astro
├── content.config.ts  # collection schemas
└── styles/global.css  # all design tokens live here - re-skin from one file
```

## Adding things

**A new project**: create `src/content/projects/my-thing.md`:

```md
---
title: "My Thing"
summary: "One-line pitch shown on the card and detail page."
order: 1            # lower = appears earlier
tech: ["Python", "FastAPI"]
link: "https://..."  # optional live link
repo: "https://..."  # optional source link
---

Markdown body becomes the project page.
```

**A new article**: create `src/content/articles/my-post.md` with `title`,
`summary`, `date`, `tags`. For a post hosted elsewhere, add
`externalUrl: "https://..."` and the list links straight out.

**Engineering work**: same as projects, in `src/content/engineering/`.

## Re-skinning

Every colour, font and accent lives in the `:root` block at the top of
`src/styles/global.css`. Change `--hyper`, `--saber`, `--bg` etc. and the
whole site follows.

## Deploy (Codeberg Pages)

1. Push this repo to Codeberg (public repo).
2. In **Settings → Actions**, enable Actions.
3. Create an access token (Settings → Applications) and add it as a repo
   secret named `CODEBERG_TOKEN` with `write:repository` scope.
4. Push to `main`. The workflow builds and force-pushes `dist/` to the
   `pages` branch, which Codeberg serves at `https://<user>.codeberg.page/`.
5. Custom domain: `public/.domains` already lists the domain. Point a DNS
   `CNAME` (or `ALIAS`/`ANAME` for the apex) at `<user>.codeberg.page`.
   HTTPS via Let's Encrypt is automatic.

> No CI? You can also just build locally and push `dist/` to the `pages`
> branch by hand. The Actions route is simply the hands-off version.

## Contact form

`src/pages/contact.astro` posts to [Formspark](https://www.formspark.io) (Dutch, EU-based).
The endpoint is already configured in `FORM_ENDPOINT`. Submissions are emailed to the
address set up in the Formspark dashboard. To swap the form, create a new form there
and replace the endpoint URL in `contact.astro`.

## Easter eggs 🥚

1. **Logo dot** - click the `.` in `DERVIS.DEV` → turn to the dark side (red theme).
2. **Konami code** - ↑↑↓↓←→←→ B A → hyperspace jump.
3. **Type "force"** anywhere → a Force pulse.
4. **Console** - open DevTools for a styled greeting + hints.
5. **View source** - a hidden comment for fellow nerds (see `EasterEggs.astro`).

May the source be with you.
