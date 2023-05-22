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
  isClicked(x, y, offsetX, offsetY) {
    //console.log("----------------------");
    // const c = document.getElementById("canvas1");
    // console.log("window:", window.innerWidth, window.innerHeight);
    // console.log("canvas:", c.width, c.height);
    // const offs = (window.innerHeight - c.height) / 2;
    // console.log("match:", offs);
    // console.log(
    //   "x:",
    //   x,
    //   "(",
    //   this.x,
    //   "=>",
    //   this.x + this.width,
    //   ")",
    //   x > this.x && x < this.x + this.width,
    //   "(",
    //   x,
    //   "-",
    //   rect.left.toFixed(0),
    //   x - rect.left > this.x && x - rect.left < this.x + this.width,
    //   "|",
    //   x,
    //   "+",
    //   offset.x.toFixed(0),
    //   x - offset.x > this.x && x - offset.x < this.x + this.width,
    //   ")"
    // );
    // console.log(
    //   "y:",
    //   y,
    //   "(",
    //   this.y,
    //   "=>",
    //   this.y + this.height,
    //   ")",
    //   y > this.y && y < this.y + this.height,
    //   "(",
    //   y,
    //   "-",
    //   rect.top.toFixed(0),
    //   y - rect.top > this.y && y - rect.top < this.y + this.height,
    //   "|",
    //   y,
    //   "+",
    //   offset.y.toFixed(0),
    //   y + offset.y > this.y && y + offset.y < this.y + this.height,
    //   ")"
    // );
    const dx = this.x; //this.game.fullScreen ? this.x - offsetX : this.x;
    const dy = this.y; //this.game.fullScreen ? this.y - offsetY : this.y;
    // console.log(
    //   "x:",
    //   x,
    //   "(",
    //   dx,
    //   "=>",
    //   dx + this.width,
    //   ")",
    //   x > dx && x < dx + this.width
    // );
    console.log(
      "y:",
      y,
      "(",
      dy,
      "=>",
      dy + this.height,
      ")",
      y > dy && y < dy + this.height
    );
    let clicked = true;
    if (dy + this.height < y || dy > y || dx + this.width < x || dx > x) {
      clicked = false;
    }
    return clicked;
  }
  // isClicked(x, y, rect, offset) {
  //   console.log("----------------------");
  //   const c = document.getElementById("canvas1");
  //   console.log("window:", window.innerWidth, window.innerHeight);
  //   console.log("canvas:", c.width, c.height);
  //   const offs = (window.innerHeight - c.height) / 2;
  //   console.log("match:", offs);
  //   console.log(
  //     "x:",
  //     x,
  //     "(",
  //     this.x,
  //     "=>",
  //     this.x + this.width,
  //     ")",
  //     x > this.x && x < this.x + this.width,
  //     "(",
  //     x,
  //     "-",
  //     rect.left.toFixed(0),
  //     x - rect.left > this.x && x - rect.left < this.x + this.width,
  //     "|",
  //     x,
  //     "+",
  //     offset.x.toFixed(0),
  //     x - offset.x > this.x && x - offset.x < this.x + this.width,
  //     ")"
  //   );
  //   console.log(
  //     "y:",
  //     y,
  //     "(",
  //     this.y,
  //     "=>",
  //     this.y + this.height,
  //     ")",
  //     y > this.y && y < this.y + this.height,
  //     "(",
  //     y,
  //     "-",
  //     rect.top.toFixed(0),
  //     y - rect.top > this.y && y - rect.top < this.y + this.height,
  //     "|",
  //     y,
  //     "+",
  //     offset.y.toFixed(0),
  //     y + offset.y > this.y && y + offset.y < this.y + this.height,
  //     ")"
  //   );
  //   let clicked = true;
  //   if (
  //     this.y + this.height - offs < y ||
  //     this.y - offs > y ||
  //     this.x + this.width < x ||
  //     this.x > x
  //   ) {
  //     clicked = false;
  //   }
  //   return clicked;
  // }
}

export default Controls;
