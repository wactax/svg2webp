#!/usr/bin/env coffee

> @w5/uridir
  @w5/read
  @w5/write
  fs > existsSync
  path > join dirname

ROOT = dirname uridir(import.meta)
main = =>
  index = read join ROOT,'index.js'
  if ~ index.indexOf('import.meta.url')
    return

  li = index.replace(
    /module\.exports\..*/g,''
  ).trimEnd().split('\n')

  for i,pos in li
    if i.startsWith 'const {'
      p = i.indexOf('require(')
      if p > 0
        i = i.trimEnd()
        li[pos] = 'import '+i.slice(6,-1).replace(/\s*=\s*/g,' from ').replace('require(','')

  li[li.length-1] = 'export '+li[li.length-1]

  out = '''import { createRequire } from "module";
  import { dirname } from "path";
  const __dirname = dirname(
  new URL(decodeURIComponent(import.meta.url)).pathname,
  );
  const require = createRequire(import.meta.url);''' +li.join('\n')
  patch = join ROOT, 'patch.js'
  if existsSync patch
    out += ';\n'+read(patch)

  write(
    join ROOT,'index.js'
    out
  )
  return

main()
