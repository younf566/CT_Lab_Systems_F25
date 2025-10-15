# Deploying this Eleventy site to GitHub Pages

This document explains two straightforward ways to publish the `week6_eleventy_blog_in_class` site on GitHub Pages and includes commands you can run locally (PowerShell examples).

Which approach to use?
- Use the `docs/` folder approach if you want to publish from the `main` branch and keep the site output as a folder in the repo. This is convenient for student projects and does not require extra branches.
- Use the `gh-pages` branch approach if you prefer to keep all generated files separate from the main branch; this requires pushing the built site to a separate branch.

Before you begin
- Make sure your site builds locally: `npm run build` (this generates `_site` by default unless you use `build:docs`).
- If you host at a project path (e.g., `https://username.github.io/repo-name/`) you should configure Eleventy to use `pathPrefix` in `.eleventy.js` and use the `| url` filter for asset links. See the "Path prefix / project site" section below.

Option A — Serve from `docs/` on the `main` branch (simple)
1. Build the site output into the `docs/` folder (there's an npm script):

```powershell
cd 'week6_eleventy_blog_in_class'
npm run build:docs
```

That runs Eleventy and writes the static site into `./docs`.

2. Commit and push the `docs` folder to your `main` branch:

```powershell
git add docs
git commit -m "Build site to docs/ for GitHub Pages"
git push origin main
```

3. On GitHub, go to your repository Settings → Pages, and under "Build and deployment" choose:
   - Source: Branch `main`
   - Folder: `/docs`

4. Save. GitHub Pages will publish the site at `https://<username>.github.io/<repo>/` (if a project site) or `https://<username>.github.io/` (if user/organization page).

Option B — Publish to `gh-pages` branch (keeps build output out of main)
1. Build the site to a temporary directory, then push to `gh-pages` branch. Example using `gh-pages` package or manual push:

```powershell
cd 'week6_eleventy_blog_in_class'
# build into a folder named 'docs' or '_site'
npm run build:docs
# push the contents of docs/ to gh-pages branch
# simple manual (force) approach - be careful: this will overwrite gh-pages
git checkout --orphan gh-pages
git --work-tree docs add --all
git --work-tree docs commit -m "Publish site"
git push origin HEAD:gh-pages --force
# return to main
git checkout main
```

2. In GitHub Settings → Pages, set Source to `gh-pages` branch (root). Save.

Path prefix / project site
- If your repository will be served from `https://username.github.io/repo-name/` (a project site), set `pathPrefix` in `.eleventy.js` and use the `| url` filter in templates/Markdown. Example in `.eleventy.js`:

```js
module.exports = function(eleventyConfig) {
  return {
    pathPrefix: "/repo-name/",
    dir: { input: ".", output: "_site" }
  };
};
```

- Then update templates and assets like this (Nunjucks/Liquid example):

```njk
<link rel="stylesheet" href="{{ '/styles/styles.css' | url }}">
<script src="{{ '/scripts/hero-scramble.js' | url }}"></script>
<img src="{{ post.data.image | url }}" alt="...">
```

This ensures URL paths include the prefix automatically.

Quick commands reference (PowerShell)
- Build locally (default output _site):
```powershell
cd 'week6_eleventy_blog_in_class'
npm run build
```

- Build into `docs/` for GitHub Pages `main`/`docs`:
```powershell
cd 'week6_eleventy_blog_in_class'
npm run build:docs
```

- Start dev server (watch + serve):
```powershell
cd 'week6_eleventy_blog_in_class'
npm start
```

Notes
- Keep your source files (templates, posts) in the repo. Only the generated files (in `docs/` or `gh-pages`) are required by GitHub Pages to serve the site.
- If you change `pathPrefix`, update templates to use the `url` filter or adjust resource paths accordingly.
- If you use custom domain, add a `CNAME` file into `docs/` (containing the domain) before pushing.

If you want, I can:
- Add a `build` and `build:docs` npm script (so you can run the commands above) — I already prepared the changes in the repo.
- Update templates to use `| url` filters and add a commented example `pathPrefix` to `.eleventy.js`.
- Automate deployment to `gh-pages` with a script.

Which of those would you like me to do next?