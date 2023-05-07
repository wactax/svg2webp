#!/usr/bin/env bash

DIR=$(realpath $0) && DIR=${DIR%/*}
cd $DIR
set -ex

bunx cep -w -c coffee -o test -e mjs
./run.sh
