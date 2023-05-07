#!/usr/bin/env bash

DIR=$(realpath ${0%/*})
cd $DIR
set -ex

exec ./sh/dist.coffee $DIR
