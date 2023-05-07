#!/usr/bin/env bash

DIR=$(realpath $0) && DIR=${DIR%/*}
cd $DIR
set -ex

yarn run build:debug
./test/main.mjs
#RUST_BACKTRACE=short exec ${1:-yarn test}
