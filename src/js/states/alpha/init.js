const minion = require('../../lib/minion');

function init() {
  const box = minion.drawRect(this);
  this.spinner = this.add.sprite(this.world.centerX, this.world.centerY,
      box.generateTexture());

  this.spinner.anchor.set(0.5);
}

module.exports = init;
