class UI {
  constructor(game) {
    this.game = game;
    this.fontSize = 30;
    this.fontFamily = "Creepster";
    this.livesImage = document.getElementById("lives");
    //this.fireImage = document.getElementById("fireBar");
  }
  update() {}
  draw(context) {
    context.save();
    context.shadowOffsetX = 2;
    context.shadowOffsetY = 2;
    context.shadowColor = "white";
    context.shadowBlur = 0;
    context.font = `${this.fontSize}px ${this.fontFamily}`;
    // context.font = `2rem ${this.fontFamily}`;
    context.textAlign = "left";
    context.fillStyle = this.game.fontColor;
    //score
    context.fillText(`Score: ${this.game.score}`, 20, 50);
    // timer
    context.font = `${this.fontSize * 0.8}px ${this.fontFamily}`;
    //context.font = `1.6rem ${this.fontFamily}`;
    context.fillText(`Time: ${(this.game.time * 0.001).toFixed(1)}`, 20, 80);
    // lives
    for (let i = 0; i < this.game.lives; i++) {
      context.drawImage(this.livesImage, 25 * i + 20, 95, 25, 25);
    }
    // empowered
    if (this.game.player.isEmpowered() && this.game.powerBar) {
      // context.font = `${this.fontSize * 0.8}px ${this.fontFamily}`;
      // context.fillText(
      //   `Power: ${(this.game.player.empoweredTimer * 0.001).toFixed(1)}`,
      //   20,
      //   140
      // );
      //context.drawImage(this.fireImage, 10, 115, 45, 45);
      context.save();
      const barWidth = 100;
      const barHeight = 13;
      context.shadowOffsetX = 0;
      context.shadowOffsetY = 0;
      context.shadowColor = "white";
      context.shadowBlur = 0;
      context.lineWidth = 2;
      context.strokeRect(20, 135, barWidth, barHeight);
      context.fillStyle = "rgba(0, 0, 0, 0.5)";
      context.fillRect(20, 135, barWidth - 2, barHeight - 2);
      //const pattern = context.createPattern(this.fireImage, "repeat");
      //context.drawImage(this.fireImage, 20, 140, 200, 45);
      //context.fillStyle = "#FA824E"; //pattern;
      //context.fillStyle = "rgba(218, 165, 32, 0.8)";
      //context.fillStyle = "rgba(227, 119, 77, 0.83)";
      context.fillStyle = "#F9EC31";
      //context.fillStyle = "#F8CC2A";
      context.fillRect(
        20,
        135,
        this.game.player.empoweredTimer / 100,
        barHeight
      );
      context.restore();
    }
    // boss
    if (this.game.bossStage && this.game.boss.getHealth() > 0) {
      const gw = this.game.width;
      const gh = this.game.height;
      context.save();
      const barWidth = 250;
      const barHeight = 13;
      context.shadowOffsetX = 0;
      context.shadowOffsetY = 0;
      context.shadowColor = "white";
      context.shadowBlur = 0;
      context.lineWidth = 2;
      context.strokeRect(
        gw * 0.5 - barWidth * 0.5,
        gh * 0.15,
        barWidth,
        barHeight
      );
      context.fillStyle = "rgba(0, 0, 0, 0.5)";
      context.fillRect(
        gw * 0.5 - barWidth * 0.5 + 1,
        gh * 0.15 + 1,
        barWidth - 2,
        barHeight - 2
      );
      context.fillStyle = "white";
      context.fillRect(
        gw * 0.5 - barWidth * 0.5 + 1,
        gh * 0.15 + 1,
        (this.game.boss.getHealth() / this.game.boss.maxHealth) * barWidth - 2,
        barHeight - 2
      );
      context.restore();
    }
    // game over
    if (this.game.gameOver) {
      context.textAlign = "center";
      const gw = this.game.width;
      const gh = this.game.height;
      context.fillStyle = "rgba(255,255,255,.1)";
      context.fillRect(0, 0, gw, gh);
      context.fillStyle = this.game.fontColor;
      if (this.game.success) {
        context.font = `${this.fontSize * 1.2}px ${this.fontFamily}`;
        //context.font = `3rem ${this.fontFamily}`;
        context.fillText(`You did it!!!`, gw * 0.5, gh * 0.5 - 115);
        context.font = `${this.fontSize * 3}px ${this.fontFamily}`;
        //context.font = `7rem ${this.fontFamily}`;
        const heading = `Happy Birthday Anya!!!`;
        context.fillText(heading, gw * 0.5, gh * 0.5 - 20);
        context.font = `${this.fontSize * 1}px ${this.fontFamily}`;
        //context.font = `2.5rem ${this.fontFamily}`;
        context.fillText(
          `What are the creatures of the night afraid of?...`,
          gw * 0.5,
          gh * 0.5 + 30
        );
        context.font = `${this.fontSize * 3}px ${this.fontFamily}`;
        //context.font = `7rem ${this.fontFamily}`;
        context.fillText(`YOU!!!`, gw * 0.5, gh * 0.5 + 120);
      } else {
        context.font = `${this.fontSize * 3}px ${this.fontFamily}`;
        //context.font = `8rem ${this.fontFamily}`;
        const heading = `Game Over!`;
        context.fillText(heading, gw * 0.5, gh * 0.5 - 30);
        const message1 = `Anya did not survive the night!!...`;
        context.font = `${this.fontSize * 1.2}px ${this.fontFamily}`;
        //context.font = `2.5rem ${this.fontFamily}`;
        context.fillText(message1, gw * 0.5, gh * 0.5 + 30);
        const message2 = `Guess we'll have to give her presents to Esme instead!!`;
        context.font = `${this.fontSize * 1.2}px ${this.fontFamily}`;
        //context.font = `2.5rem ${this.fontFamily}`;
        context.fillText(message2, gw * 0.5, gh * 0.5 + 80);
      }
    }
    //context.restore();
    // debug
    // context.fillText(`Speed: ${this.game.speed}`, 20, 100);
    // context.fillText(`State: ${this.game.player.currentState.state}`, 20, 120);
  }
}

export default UI;
