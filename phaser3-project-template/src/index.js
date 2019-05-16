import Phaser from "phaser";
import logoImg from "./assets/logo.png";

const config = {
  type: Phaser.AUTO,
  parent: "phaser-example",
  width: 400,
  height: 640,
  scene: {
    preload: preload,
    create: create,
    update: update
  }
};

const game = new Phaser.Game(config);

function preload() {
}

var g_grid;
var g_rot = 0;
var g_drot = 0.05;

function create() {
  this.cameras.main.setScroll(
    -this.game.config.width / 2,
    -this.game.config.height / 2)

  g_grid = this.add.grid(
    0,
    0,
    this.game.config.width - 32,
    this.game.config.height - 32,
    8,
    8,
    0x057605);

  var graphics = this.add.graphics();
  graphics.x = -this.game.config.width / 4;
  graphics.y = -this.game.config.height / 4;

  graphics.lineStyle(4, 0x00ff00, 1);
  graphics.strokeRect(
    0,
    0,
    this.game.config.height / 4,
    this.game.config.width / 4,
  );

  graphics.fillStyle(0xff0000, 0.3);
  graphics.fillCircle(256, 256, 256);
}

function update() {
  g_rot += g_drot;
  g_grid.angle = g_rot;;
}
