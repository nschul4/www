BASE_DIR=~/dev/phaser/my-examples/

rsync -a $BASE_DIR/lander_dist/*        ./phaser/lander
rsync -a $BASE_DIR/orbiter_dist/*       ./phaser/orbiter
rsync -a $BASE_DIR/pointerevents_dist/* ./phaser/pointerevents
rsync -a $BASE_DIR/spaceship_dist/*     ./phaser/spaceship
