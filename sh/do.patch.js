#!/usr/bin/env -S node --loader=@w5/jsext --trace-uncaught --expose-gc --unhandled-rejections=strict --experimental-import-meta-resolve
var ROOT, main;

import uridir from '@w5/uridir';

import read from '@w5/read';

import write from '@w5/write';

import {
  existsSync
} from 'fs';

import {
  join,
  dirname
} from 'path';

ROOT = dirname(uridir(import.meta));

main = () => {
  var i, index, j, len, li, out, p, patch, pos;
  index = read(join(ROOT, 'index.js'));
  if (~index.indexOf('import.meta.url')) {
    return;
  }
  li = index.replace(/module\.exports\..*/g, '').trimEnd().split('\n');
  for (pos = j = 0, len = li.length; j < len; pos = ++j) {
    i = li[pos];
    if (i.startsWith('const {')) {
      p = i.indexOf('require(');
      if (p > 0) {
        i = i.trimEnd();
        li[pos] = 'import ' + i.slice(6, -1).replace(/\s*=\s*/g, ' from ').replace('require(', '');
      }
    }
  }
  li[li.length - 1] = 'export ' + li[li.length - 1];
  out = `import { createRequire } from "module";
import { dirname } from "path";
const __dirname = dirname(
new URL(decodeURIComponent(import.meta.url)).pathname,
);
const require = createRequire(import.meta.url);` + li.join('\n');
  patch = join(ROOT, 'patch.js');
  if (existsSync(patch)) {
    out += ';\n' + read(patch);
  }
  write(join(ROOT, 'index.js'), out);
};

main();
