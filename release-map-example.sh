#!/usr/bin/env bash

function err_trap {
    popd
    exit 1
}

trap err_trap ERR

BASE_DIR=~/dev/http_server/public

echo Syncing...

rsync -a --del $BASE_DIR/* ./map-example || true

echo "Git status..."
git status

echo Done.
