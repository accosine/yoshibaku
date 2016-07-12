function drawRect(ctx, x1, y1, x2, y2, color, opacity) {
  const box = ctx.make.graphics(0, 0);
  return box.beginFill(color, opacity).drawRect(x1, y1, x2, y2).endFill();
}

module.exports.drawRect = drawRect;

