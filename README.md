# sdrshnv.github.io

This site is built with Jekyll and published by GitHub Pages.

## Editing the homepage

Edit [`index.md`](index.md). The content below the front matter (`---`) is
standard Markdown. Commit changes to `main` to publish them.

Site-wide HTML lives in `_layouts/default.html`, and styles live in
`assets/css/style.css`.

## Building locally

Install the dependencies once:

```sh
bundle install
```

Build the site:

```sh
bundle exec jekyll build
```

Or start a local server with automatic rebuilding:

```sh
bundle exec jekyll serve --livereload
```

Then open <http://localhost:4000>.

## Adding a clothing review

Create `_reviews/<slug>.md` with `title`, `brand` and `date` front matter and
write the review in Markdown. It appears automatically on `/clothing/`.

## Wearlog data on review pages

Add `wearlog_id: <item id>` to a review's front matter to show that item's
comfort range from [WearLog](../wearlog) in a banner at the top of the page.
Refresh the numbers with:

```sh
node scripts/update-wearlog.mjs
```

then commit `_data/wearlog.json`. Only items referenced by a review, and only
their comfort range and wear count, are written.
