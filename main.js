import { resources } from "./src/Resource.js";
import { Sprite } from "./src/Sprite.js";
import { Vector2 } from "./src/Vector2.js";

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

const draw = () => {
  skySprite.drawImage(ctx, 0, 0);
};

const hero = new Sprite({
  resource: resources.images.hero,
  hFrames: 3,
  vFrames: 8,
  frame: 1,
});

setInterval(() => {
  draw();
}, 300);
