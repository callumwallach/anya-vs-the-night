import {
  ARROW_DOWN,
  ARROW_UP,
  ARROW_LEFT,
  ARROW_RIGHT,
  SWIPE_UP,
  SWIPE_DOWN,
  ENTER,
  SPACE,
  MOVE_UP,
  MOVE_DOWN,
  MOVE_LEFT,
  MOVE_RIGHT,
  W,
  S,
  A,
  D,
  R,
} from "./constants.js";

const TOUCH = "touch";

class InputHandler {
  constructor(game, canvas) {
    this.game = game;
    this.canvas = canvas;
    this.init();
    //this.tapInterval = 200;
    window.addEventListener("keydown", (e) => {
      switch (e.key) {
        case ARROW_UP:
        case SPACE:
        case W:
          if (!this.#contains(MOVE_UP)) this.keys.push(MOVE_UP);
          break;
        case ARROW_DOWN:
        case S:
          if (!this.#contains(MOVE_DOWN)) this.keys.push(MOVE_DOWN);
          break;
        case ARROW_LEFT:
        case A:
          if (!this.#contains(MOVE_LEFT)) this.keys.push(MOVE_LEFT);
          break;
        case ARROW_RIGHT:
        case D:
          if (!this.#contains(MOVE_RIGHT)) this.keys.push(MOVE_RIGHT);
          break;
        case ENTER:
          if (this.game.gameOver) {
            this.game.startNewGame();
            break;
          }
        case R:
          if (!this.#contains(ENTER)) this.keys.push(ENTER);
          break;
        case "!":
          this.game.debug = !this.game.debug;
      }
    });
    window.addEventListener("keyup", (e) => {
      switch (e.key) {
        case ARROW_UP:
        case SPACE:
        case W:
          this.keys.splice(this.keys.indexOf(MOVE_UP), 1);
          break;
        case ARROW_DOWN:
        case S:
          this.keys.splice(this.keys.indexOf(MOVE_DOWN), 1);
          break;
        case ARROW_LEFT:
        case A:
          this.keys.splice(this.keys.indexOf(MOVE_LEFT), 1);
          break;
        case ARROW_RIGHT:
        case D:
          this.keys.splice(this.keys.indexOf(MOVE_RIGHT), 1);
          break;
        case ENTER:
        case R:
          this.keys.splice(this.keys.indexOf(ENTER), 1);
      }
    });
    window.addEventListener("touchstart", (e) => {
      //console.log(e);
      e.preventDefault();
      this.touchX = e.changedTouches[0].pageX;
      this.touchY = e.changedTouches[0].pageY;
      //console.log(e.changedTouches[0]);
      //console.log(e.changedTouches);
      //const context = canvas.getContext("2d");
      // context.save();
      // context.fillStyle = "white";
      // context.fillRect(this.touchX, this.touchY, 10, 10);
      // context.restore();
      //var rect = this.canvas.getBoundingClientRect();
      // console.log(
      //   this.game.player.y,
      //   this.touchY,
      //   "+",
      //   rect.top.toFixed(0) / 2,
      //   "=",
      //   (this.touchY + rect.top / 2).toFixed(0),
      //   this.game.touchRollIcon.dy,
      //   "=>",
      //   this.game.touchRollIcon.dy + this.game.touchRollIcon.dHeight
      // );
      //this.touchX -= rect.left;
      //this.touchY -= rect.top;
      //this.touchY = e.targetTouches[0].pageY - rect.top;
      // console.log(
      //   rect.top,
      //   this.touchX,
      //   this.touchY,
      //   this.game.touchRollIcon.dx,
      //   "=>",
      //   this.game.touchRollIcon.dx + this.game.touchRollIcon.dWidth,
      //   this.game.touchRollIcon.dy,
      //   "=>",
      //   this.game.touchRollIcon.dy + this.game.touchRollIcon.dHeight,
      //   "|",
      //   this.game.height
      // );
      // const time = Date.now();
      // if (time - this.lastTap < this.tapInterval) {
      //   if (this.#contains(ENTER)) {
      //     this.keys.splice(this.keys.indexOf(ENTER), 1);
      //   } else {
      //     this.keys.push(ENTER);
      //   }
      // }
      // this.lastTap = time;
      // if (
      //   this.touchX - rect.left > this.game.touchRollIcon.dx &&
      //   this.touchX - rect.left <
      //     this.game.touchRollIcon.dx + this.game.touchRollIcon.dWidth &&
      //   this.touchY - rect.top > this.game.touchRollIcon.dy &&
      //   this.touchY - rect.top <
      //     this.game.touchRollIcon.dy + this.game.touchRollIcon.dHeight
      // ) {
      //   this.touchX = this.game.player.x;
      //   this.touchY = this.game.player.y;
      //   if (!this.#contains(ENTER)) this.keys.push(ENTER);
      // }
      //this.tapStart = Date.now();
      //const rect = this.canvas.getBoundingClientRect();
      const pos = getMousePos(this.canvas, e.changedTouches[0]);
      // console.log(
      //   "width:",
      //   window.innerWidth,
      //   this.canvas.width,
      //   (window.innerWidth - this.canvas.width) / 2
      // );
      console.log(
        "height:",
        window.innerHeight,
        this.canvas.height,
        (window.innerHeight - this.canvas.height) / 2
      );
      if (
        this.game.controls.isClicked(
          pos.x, //this.touchX,
          pos.y, //this.touchY,
          (window.innerWidth - this.canvas.width) / 2,
          (window.innerHeight - this.canvas.height) / 2
          // rect,
          // getOffsetSum(e.changedTouches[0].target)
          // this.touchX - (this.game.fullScreen ? 0 : rect.left),
          // this.touchY - (this.game.fullScreen ? 0 : rect.top)
        )
      ) {
        this.controlsClicked = !this.controlsClicked;
        //if (!this.#contains(ENTER)) this.keys.push(ENTER);
      }
      if (this.game.gameOver) this.game.startNewGame();
    });
    window.addEventListener("touchend", (e) => {
      //e.preventDefault();
      // if (
      //   e.changedTouches[0].pageX === this.touchX &&
      //   e.changedTouches[0].pageY === this.touchY
      // ) {
      //   const rect = this.canvas.getBoundingClientRect();
      //   if (
      //     this.game.controls.isClicked(
      //       this.touchX - rect.left,
      //       this.touchY - rect.top
      //     )
      //   ) {
      //     this.controlsClicked = !this.controlsClicked;
      //   }
      // }

      this.keys = [];
      //console.log(this.controlsClicked ? "active" : "inactive");
      if (this.controlsClicked) {
        if (!this.#contains(ENTER)) this.keys.push(ENTER);
      }

      // if (this.controlsClicked) this.keys.push(ENTER);
      // this.keys.splice(this.keys.indexOf(MOVE_UP), 1);
      // this.keys.splice(this.keys.indexOf(MOVE_DOWN), 1);
      // this.keys.splice(this.keys.indexOf(MOVE_LEFT), 1);
      // this.keys.splice(this.keys.indexOf(MOVE_RIGHT), 1);
    });
    window.addEventListener("touchmove", (e) => {
      e.preventDefault();

      // const swipeDistanceX = e.changedTouches[0].pageX - this.touchX;
      // const swipeDistanceY = e.changedTouches[0].pageY - this.touchY;
      const action = this.#getAction(
        this.touchX,
        e.changedTouches[0].pageX,
        this.touchY,
        e.changedTouches[0].pageY
      );
      if (action && !this.#contains(action)) this.keys.push(action);
    });
    if (this.game.pointer === TOUCH) {
      // window.addEventListener("deviceorientation", (event) => {
      //   console.log(`x:${event.beta} y:${event.gamma}`);
      // });
    }
  }
  init() {
    this.keys = [];
    this.touchX = "";
    this.touchY = "";
    this.touchThresholdX = 30;
    this.touchThresholdY = 30;
    this.controlsClicked = false;
  }
  #getAction(startX, endX, startY, endY, thresholdX, thresholdY) {
    //console.log(startX, endX, startY, endY, thresholdX, thresholdY);
    // const left = endX + thresholdX < startX;
    // const right = endX - thresholdX > startX;
    // const up = endY + thresholdY < startY;
    // const down = endY - thresholdY > startY;
    const left = Math.abs(Math.min(0, endX + 20 - startX));
    const right = Math.abs(Math.max(0, endX - 20 - startX));
    const up = Math.abs(Math.min(0, endY + 50 - startY));
    const down = Math.abs(Math.max(0, endY - 15 - startY));
    let gesture = null;
    if (Math.max(0, left, right, up, down) !== 0) {
      const gestures = {};
      if (left > 0) gestures[MOVE_LEFT] = left;
      if (right > 0) gestures[MOVE_RIGHT] = right;
      if (up > 0) gestures[MOVE_UP] = up;
      if (down > 0) gestures[MOVE_DOWN] = down;
      gesture = Object.entries(gestures).sort(([, a], [, b]) => b - a)[0][0];
      //console.log(left, right, up, down, gesture);
    }
    return gesture;
  }
  #contains(key) {
    return this.keys.indexOf(key) !== -1;
  }
  includes(actions) {
    for (const action of actions) {
      if (this.keys.includes(action)) return true;
    }
    return false;
  }
}

function getMousePos(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: ((evt.clientX - rect.left) / (rect.right - rect.left)) * canvas.width,
    y: ((evt.clientY - rect.top) / (rect.bottom - rect.top)) * canvas.height,
  };
}

function getOffsetSum(element) {
  let curleft = 0,
    curtop = 0;

  if (element.offsetParent) {
    do {
      curleft += element.offsetLeft;
      curtop += element.offsetTop;
      element = element.offsetParent;
    } while (element);
  }

  return { x: curleft, y: curtop };
}

export default InputHandler;
