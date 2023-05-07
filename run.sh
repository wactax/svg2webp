#!/usr/bin/env bash

DIR=$(realpath $0) && DIR=${DIR%/*}
cd $DIR
set -ex

yarn run build:debug
RUST_BACKTRACE=short exec ${1:-yarn test} | tee out.txt
