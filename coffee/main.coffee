#!/usr/bin/env coffee

> ../index.js > svgWebp
  ava:test
  path > join dirname
  @w5/uridir
  @w5/write
  fs > readFileSync

ROOT = dirname uridir import.meta

test(
  'svg → webp'
  (t) =>
    r = await svgWebp(
      readFileSync join ROOT, 'logo.svg'
      80
    )
    write(
      join(ROOT, 'logo.webp')
      r
    )
    t.true(r instanceof Buffer)
    return
)
