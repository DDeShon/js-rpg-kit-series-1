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

const heroDestinationPosition = new Vector2(gridCells(10), gridCells(5));

const shadow = new Sprite({
  resource: resources.images.shadow,
  frameSize: new Vector2(32, 32),
});

const input = new Input();

const distance = moveTowards(hero, heroDestinationPosition, 1);

return;

const update = () => {
  if (input.direction === "DOWN") {
    hero.position.y += 1;
    hero.frame = 0;
  }
  if (input.direction === "UP") {
    hero.position.y -= 1;
    hero.frame = 6;
  }
  if (input.direction === "RIGHT") {
    hero.position.x += 1;
    hero.frame = 3;
  }
  if (input.direction === "LEFT") {
    hero.position.x -= 1;
    hero.frame = 9;
  }
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
