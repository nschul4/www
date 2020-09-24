#!/usr/bin/env bash

function err_trap {
    popd
    exit 1
}

trap err_trap ERR

BASE_DIR=~/dev/phaser-examples

echo Popping over to project directory.

pushd .
cd $BASE_DIR
npm run build

echo Popping back to release directory.
popd

function rsyncTemplate {
    local target=$1
    rsync -a $BASE_DIR/${target}_dist/* ./phaser/${target} || true
}

echo Syncing...

rsyncTemplate hauler
rsyncTemplate lander
rsyncTemplate lander-util
rsyncTemplate orbiter
rsyncTemplate pointerevents
rsyncTemplate polygondrop
rsyncTemplate rocketcar
rsyncTemplate rocketenginetest
rsyncTemplate soundpad
rsyncTemplate spaceship
rsyncTemplate vortex
rsyncTemplate vortex2

echo "Git status..."
git status

echo Done.
