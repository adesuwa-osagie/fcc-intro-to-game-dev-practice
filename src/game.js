import Paddle from "/src/paddle";
import InputHandler from "/src/input";
import Ball from "/src/ball";
import Trophy from "/src/trophy";

export default class Game {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
  }

  start() {
    this.ball = new Ball(this);
    this.paddle = new Paddle(this);

    let trophy = [];

    for (let i = 0; i < 10; i++) {
      trophy.push(new Trophy(this, { x: i * 52, y: 30 }));
    }

    //... => spread operator - adds an array to another array
    this.gameObjects = [this.ball, this.paddle, ...trophy];

    new InputHandler(this.paddle);
  }

  update(deltaTime) {
    this.gameObjects.forEach((object) => object.update(deltaTime));
  }

  draw(ctx) {
    this.gameObjects.forEach((object) => object.draw(ctx));
  }
}
