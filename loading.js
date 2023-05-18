class Loading {
  constructor(game) {
    this.game = game;
    this.fontSize = 40;
    this.fontFamily = "Creepster";
  }
  update() {}
  draw(context) {
    context.save();
    context.shadowOffsetX = 4;
    context.shadowOffsetY = 4;
    context.shadowColor = "white";
    context.shadowBlur = 0;
    context.fillStyle = this.game.fontColor;
    context.textAlign = "center";
    context.font = `${this.fontSize * 2}px ${this.fontFamily}`;
    const heading = `Anya vs The Night`;
    const message = `Will she survive her birthday??!!`;
    context.fillText(
      heading,
      this.game.width * 0.5,
      this.game.height * 0.5 - 20
    );
    context.font = `${this.fontSize * 0.7}px ${this.fontFamily}`;
    context.fillText(
      message,
      this.game.width * 0.5,
      this.game.height * 0.5 + 20
    );
    context.restore();
  }
}

export default Loading;
