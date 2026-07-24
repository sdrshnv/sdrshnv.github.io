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
