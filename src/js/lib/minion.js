function drawRect(ctx) {
  const box = ctx.make.graphics(0, 0);
  return box.beginFill(0xFF700B, 1).drawRect(-50, -50, 100, 100).endFill();
}

module.exports.drawRect = drawRect;

