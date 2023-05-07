#!/usr/bin/env -S node --loader=@w5/jsext --trace-uncaught --expose-gc --unhandled-rejections=strict --experimental-import-meta-resolve
var ROOT;

import {
  svgWebp
} from '../index.js';

import {
  join,
  dirname
} from 'path';

import uridir from '@w5/uridir';

import {
  readFileSync
} from 'fs';

// ava:test
ROOT = dirname(uridir(import.meta));

// test(
//   'svg2webp'
// (t) =>
console.log(svgWebp(readFileSync(join(ROOT, 'logo.svg')), 80));

// t.is(sum(1, 2), 3)
//     return
// )
