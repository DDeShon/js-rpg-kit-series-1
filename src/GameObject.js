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
}
