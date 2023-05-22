class Controls {
  constructor(game, icon) {
    this.game = game;
    this.icon = icon;
    this.x = 16;
    this.y = this.game.height - 75;
    this.width = 65;
    this.height = 65;
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
      this.icon.x,
      this.icon.y,
      this.icon.width,
      this.icon.height,
      this.x,
      this.y,
      this.width,
      this.height
    );
    context.drawImage(this.fireImage, 5, this.game.height - 113, 90, 100);
  }
  isClicked(x, y) {
    let clicked = true;
    if (
      this.y + this.height < y ||
      this.y > y ||
      this.x + this.width < x ||
      this.x > x
    ) {
      clicked = false;
    }
    return clicked;
  }
}

export default Controls;
