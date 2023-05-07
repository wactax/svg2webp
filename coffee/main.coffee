#!/usr/bin/env coffee

> ../index.js > svgWebp
  path > join dirname
  @w5/uridir
  @w5/write
  fs > readFileSync
# ava:test

ROOT = dirname uridir import.meta

# test(
#   'svg2webp'
# (t) =>
write(
  join(ROOT, 'logo.webp')
  await svgWebp(
    readFileSync join ROOT, 'logo.svg'
    80
  )
)
    # t.is(sum(1, 2), 3)
#     return
# )
