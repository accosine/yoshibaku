function update(game) {
  game.debug.body(this.emojis);
  game.debug.body(this.rect);
  game.physics.arcade.overlap(this.rect, this.emojis, function(r, s) {
    console.log(r, s);
    // overlap code here, with r and s corresponding to the rect and sprite objects that have overlapped
  });
}

module.exports = update;

