function update(game) {
  this.emojis.forEach((emoji) => {
    game.debug.body(emoji);
  });

  const emoji = this.emojis.children[0];
  if (Math.abs(emoji.body.velocity.y) < 0.2 && Math.abs(emoji.body.newVelocity.y) < 0.2) {
    console.log(emoji, 'ball stopped moving');
  }
  // if (emoji.body.acceleration.y) {
    // console.log(emoji.body.velocity.y);
  // console.log(emoji);
  // }
  // game.physics.arcade.getObjectsAtLocation(120, 200, this.emojis, (pointer, emoji) => {
  //   console.log(pointer);
  //   console.log(emoji);
  // }, this, 'ohl stinkt');
}

module.exports = update;

