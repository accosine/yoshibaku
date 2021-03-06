const minion = require('../../lib/minion');

const COLUMNS = 7;

function create(game) {
  game.physics.startSystem(Phaser.Physics.ARCADE);

  // Style stage
  this.stage.backgroundColor = '#4488AA';
  const box = minion.drawRect(this, 0, 0, 525, 525, 0xFFFFFF, 1);
  this.field = this.add.sprite(50, 50, box.generateTexture());

  this.emojis = game.add.group();
  for (let i = 0; i < COLUMNS; i++) {
    this.emojis.create(50 + i * 75, 50, 'emoji');
  }

  game.physics.enable(this.emojis, Phaser.Physics.ARCADE);
  this.emojis.forEach((emoji) => {
    emoji.body.collideWorldBounds = true;
    emoji.body.bounce.y = 0.1;
    emoji.body.acceleration.setTo(0, 100);
  });

}

module.exports = create;

