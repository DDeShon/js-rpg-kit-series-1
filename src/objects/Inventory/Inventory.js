import { GameObject } from "../../GameObject.js";
import { resources } from "../../Resource.js";
import { Sprite } from "../../Sprite.js";

export class Inventory extends GameObject {
  constructor() {
    super({});
    const sprite = new Sprite({
      resource: resources.images.rod,
    });
    this.addChild(sprite);
  }
}
