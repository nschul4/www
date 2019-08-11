#!/usr/bin/env bash

function err_trap {
    popd
    exit 1
}

trap err_trap ERR

BASE_DIR=~/dev/phaser/my-examples/

pushd .
cd $BASE_DIR
npm run build

echo popping back to original dir.
popd

echo syncing...

rsync -a $BASE_DIR/gridrunner_dist/*       ./phaser/gridrunner        || true
rsync -a $BASE_DIR/lander_dist/*           ./phaser/lander            || true
rsync -a $BASE_DIR/orbiter_dist/*          ./phaser/orbiter           || true
rsync -a $BASE_DIR/pointerevents_dist/*    ./phaser/pointerevents     || true
rsync -a $BASE_DIR/polygondrop_dist/*      ./phaser/polygondrop       || true
rsync -a $BASE_DIR/rocketcar_dist/*        ./phaser/rocketcar         || true
rsync -a $BASE_DIR/rocketenginetest_dist/* ./phaser/rocketenginetest  || true
rsync -a $BASE_DIR/soundpad_dist/*         ./phaser/soundpad          || true
rsync -a $BASE_DIR/spaceship_dist/*        ./phaser/spaceship         || true

echo done.
