import { Vector2 } from "./Vector2";

export class GameObject {
  constructor({ position }) {
    this.position = position ?? new Vector2(0, 0);
    this.children = [];
  }

  // first entry point of the loop
  stepEntry(delta, root) {
    // call updates on all children first
    this.children.forEach((child) => child.stepEntry(delta, root));

    // call any implemented step code
    this.step(delta, root);
  }

  // called once every frame
  step(_delta) {}

  // draw entry
  draw(ctx, x, y) {
    const drawPosX = x + this.position.x + this.drawOffset.x;
    const drawPosY = y + this.position.y + this.drawOffset.y;

    // do the actual rendering for images
    this.drawImage(ctx, drawPosX, drawPosY);

    // pass on to children
    this.children.forEach((child) => child.draw(ctx, drawPosX, drawPosY));
  }

  drawImage(ctx, drawPosX, drawPosY) {}
}
