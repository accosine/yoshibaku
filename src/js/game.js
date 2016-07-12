const game = new Phaser.Game(800, 625);
const states = require('./states');

game.state.add('Alpha', states.alpha);
game.state.start('Alpha');
