export default new Phaser.Class({
    Extends: Phaser.Scene,
    initialize:
        function GamePlay() {
            this.globals = {
                g_grid: null,
                g_rot: 0,
                g_drot: 0.05
            };
            Phaser.Scene.call(this, { key: 'GamePlay' })
        },

    create: function () {
        // Move the camera center to (0, 0)
        // so we can easily scale the game to any size
        // without change positions of game objects
        this.cameras.main.setScroll(
            -this.game.config.width / 2,
            -this.game.config.height / 2)

        // this.add.image(0, 0, 'tex', 'logo')

        // this.add.text(0, 0, 'width:' + this.game.config.width, { fontFamily: '"Roboto Condensed"' });
        // this.add.text(0, 20, 'height:' + this.game.config.height, { fontFamily: '"Roboto Condensed"' });

        this.globals.g_grid = this.add.grid(
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

    },

    update: function () {
        this.globals.g_rot += this.globals.g_drot;
        this.globals.g_grid.angle = this.globals.g_rot;
    }
})
