# Fonts

The project loads **Playfair Display** (serif headings) and **Plus Jakarta Sans**
(sans-serif body) from Google Fonts via the `@import` at the top of `src/index.css`.

To self-host instead, drop the `.woff2` files in this folder, remove the Google
Fonts `@import`, and declare `@font-face` rules in `src/index.css`. The Tailwind
tokens `--font-serif` / `--font-sans` in the `@theme` block will keep working.
