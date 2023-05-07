#!/usr/bin/env coffee

> ../index.js > svgWebp
  path > join dirname
  @w5/uridir
  fs > readFileSync
# ava:test

ROOT = dirname uridir import.meta

# test(
#   'svg2webp'
# (t) =>
console.log svgWebp(
  readFileSync join ROOT, 'logo.svg'
  80
)
    # t.is(sum(1, 2), 3)
#     return
# )
