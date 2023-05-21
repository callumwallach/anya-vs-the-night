class Controls {
  constructor(game) {
    this.game = game;
    this.icon = this.game.touchRollIcon;
    this.x = 20;
    this.y = this.game.height - 75;
    this.fireImage = document.getElementById("fire");
  }
  draw(context) {
    if (this.game.debug) {
      context.lineWidth = 2;
      context.strokeStyle = "white";
      context.beginPath();
      context.rect(
        this.icon.dx,
        this.icon.dy,
        this.icon.dWidth,
        this.icon.dHeight
      );
      context.stroke();
    }
    context.drawImage(
      this.icon.image,
      this.icon.sx,
      this.icon.sy,
      this.icon.sWidth,
      this.icon.sHeight,
      this.icon.dx,
      this.icon.dy,
      this.icon.dWidth,
      this.icon.dHeight
    );
    context.drawImage(this.fireImage, 5, this.game.height - 113, 90, 100);
  }
}

export default Controls;
