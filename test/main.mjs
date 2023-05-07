#!/usr/bin/env -S node --loader=@w5/jsext --trace-uncaught --expose-gc --unhandled-rejections=strict --experimental-import-meta-resolve
import test from 'ava';

import {
  sum
} from '../index.js';

test('sum from native', (t) => {
  console.log(sum(3, 3));
  t.is(sum(1, 2), 3);
});
