#!/usr/bin/env -S node --loader=@w5/jsext --trace-uncaught --expose-gc --unhandled-rejections=strict --experimental-import-meta-resolve
var ROOT;

import {
  svgWebp
} from '../index.js';

import test from 'ava';

import {
  join,
  dirname
} from 'path';

import uridir from '@w5/uridir';

import write from '@w5/write';

import {
  readFileSync
} from 'fs';

ROOT = dirname(uridir(import.meta));

test('svg → webp', async(t) => {
  var r;
  r = (await svgWebp(readFileSync(join(ROOT, 'logo.svg')), 80));
  write(join(ROOT, 'logo.webp'), r);
  t.true(r instanceof Buffer);
});
