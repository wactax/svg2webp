#!/usr/bin/env coffee

> ava:test
  ../index.js > sum

test(
  'sum from native'
  (t) =>
    console.log sum 3,3
    t.is(sum(1, 2), 3)
    return
)
