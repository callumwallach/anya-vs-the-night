class Loading {
  constructor(game) {
    this.game = game;
    this.fontSize = 40;
    this.fontFamily = "Creepster";
  }
  update() {}
  draw(context) {
    const gw = this.game.width;
    const gh = this.game.height;
    context.save();
    context.fillStyle = "rgba(255,255,255,.15)";
    context.fillRect(0, 0, gw, gh);
    context.shadowOffsetX = 2;
    context.shadowOffsetY = 2;
    context.shadowColor = "white";
    context.shadowBlur = 0;
    context.fillStyle = this.game.fontColor;
    context.textAlign = "center";
    context.font = `${this.fontSize * 2.5}px ${this.fontFamily}`;
    //context.font = `7rem ${this.fontFamily}`;

    const heading = `Anya vs The Night`;
    const message1 = `It's Anya's birthday tomorrow... she will be 8`;
    const message2 = `But first... she must battle the forces of the night!!`;
    const message3 = `Will she survive and make it to her birthday??!!`;
    context.fillText(heading, gw * 0.5, gh * 0.5 - 50);
    //context.fillText(heading, gw * 0.5, gh * 0.5 - 50);
    context.font = `${this.fontSize * 0.75}px ${this.fontFamily}`;
    context.fillText(message1, gw * 0.5, gh * 0.5 + 10);
    context.fillText(message2, gw * 0.5, gh * 0.5 + 50);
    // context.font = `2rem ${this.fontFamily}`;
    // context.fillText(message1, gw * 0.5, gh * 0.5 + 20);
    // context.fillText(message2, gw * 0.5, gh * 0.5 + 70);
    context.font = `${this.fontSize * 1}px ${this.fontFamily}`;
    context.fillText(message3, gw * 0.5, gh * 0.5 + 110);
    // context.font = `3rem ${this.fontFamily}`;
    // context.fillText(message3, gw * 0.5, gh * 0.5 + 140);
    context.restore();
  }
}

export default Loading;
