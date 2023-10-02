import { GameLoop } from "./src/GameLoop.js";
import { Input } from "./src/Input.js";
import { resources } from "./src/Resource.js";
import { Sprite } from "./src/Sprite.js";
import { Vector2 } from "./src/Vector2.js";
import { gridCells } from "./src/helpers/grid.js";
import { moveTowards } from "./src/helpers/moveTowards.js";

const canvas = document.querySelector("#game-canvas");
const ctx = canvas.getContext("2d");

// Build up the scene by adding a sky, ground, and hero
const skySprite = new Sprite({
  resource: resources.images.sky,
  frameSize: new Vector2(320, 180),
});

const groundSprite = new Sprite({
  resource: resources.images.ground,
  frameSize: new Vector2(320, 180),
});

const hero = new Sprite({
  resource: resources.images.hero,
  frameSize: new Vector2(32, 32),
  hFrames: 3,
  vFrames: 8,
  frame: 1,
  position: new Vector2(gridCells(6), gridCells(5)),
});

const heroDestinationPosition = new Vector2(gridCells(13), gridCells(5));

const shadow = new Sprite({
  resource: resources.images.shadow,
  frameSize: new Vector2(32, 32),
});

const input = new Input();

const update = () => {
  const distance = moveTowards(hero, heroDestinationPosition, 1);
  const hasArrived = distance <= 1;

  // attempt to move again if the hero is at the position
  if (hasArrived) {
    tryMove();
  }
};

const tryMove = () => {
  if (!input.direction) {
    return;
  }

  let nextX = heroDestinationPosition.x;
  let nextY = heroDestinationPosition.y;
  const gridSize = 16;

  if (input.direction === "DOWN") {
    nextY += gridSize;
    hero.frame = 0;
  }
  if (input.direction === "UP") {
    nextY -= gridSize;
    hero.frame = 6;
  }
  if (input.direction === "RIGHT") {
    nextY += gridSize;
    hero.frame = 3;
  }
  if (input.direction === "LEFT") {
    nextY -= gridSize;
    hero.frame = 9;
  }

  // TODO: check if destination space is free
  heroDestinationPosition.x = nextX;
  heroDestinationPosition.y = nextY;
};

const draw = () => {
  skySprite.drawImage(ctx, 0, 0);
  groundSprite.drawImage(ctx, 0, 0);

  // Center the hero in the cell
  const heroOffset = new Vector2(-8, -21);
  const heroPosX = hero.position.x + heroOffset.x;
  const heroPosY = hero.position.y + heroOffset.y;

  shadow.drawImage(ctx, heroPosX, heroPosY);
  hero.drawImage(ctx, heroPosX, heroPosY);
};

const gameLoop = new GameLoop(update, draw);
gameLoop.start();
