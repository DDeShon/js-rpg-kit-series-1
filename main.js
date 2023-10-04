import { Animations } from "./src/Animations.js";
import { FrameIndexPattern } from "./src/FrameIndexPattern.js";
import { GameLoop } from "./src/GameLoop.js";
import { GameObject } from "./src/GameObject.js";
import { DOWN, Input, LEFT, RIGHT, UP } from "./src/Input.js";
import { resources } from "./src/Resource.js";
import { Sprite } from "./src/Sprite.js";
import { Vector2 } from "./src/Vector2.js";
import { gridCells, isSpaceFree } from "./src/helpers/grid.js";
import { moveTowards } from "./src/helpers/moveTowards.js";
import { walls } from "./src/levels/Level1.js";
import { Hero } from "./src/objects/Hero/Hero.js";
import {
  STAND_DOWN,
  STAND_LEFT,
  STAND_RIGHT,
  STAND_UP,
  WALK_DOWN,
  WALK_LEFT,
  WALK_RIGHT,
  WALK_UP,
} from "./src/objects/Hero/heroAnimations.js";

const canvas = document.querySelector("#game-canvas");
const ctx = canvas.getContext("2d");

const mainScene = new GameObject({
  position: new Vector2(0, 0),
});

// Build up the scene by adding a sky, ground, and hero
const skySprite = new Sprite({
  resource: resources.images.sky,
  frameSize: new Vector2(320, 180),
});
mainScene.addChild(skySprite);

const groundSprite = new Sprite({
  resource: resources.images.ground,
  frameSize: new Vector2(320, 180),
});
mainScene.addChild(groundSprite);

const hero = new Hero(gridCells(6), gridCells(5));
mainScene.addChild(hero);

const shadow = new Sprite({
  resource: resources.images.shadow,
  frameSize: new Vector2(32, 32),
});

mainScene.input = new Input();

const update = (delta) => {
  mainScene.stepEntry(delta, mainScene);
};

const draw = () => {
  mainScene.draw(ctx, 0, 0);

  // skySprite.drawImage(ctx, 0, 0);
  // groundSprite.drawImage(ctx, 0, 0);

  // // Center the hero in the cell
  // const heroOffset = new Vector2(-8, -21);
  // const heroPosX = hero.position.x + heroOffset.x;
  // const heroPosY = hero.position.y + heroOffset.y;

  // shadow.drawImage(ctx, heroPosX, heroPosY);
  // hero.drawImage(ctx, heroPosX, heroPosY);
};

const gameLoop = new GameLoop(update, draw);
gameLoop.start();
