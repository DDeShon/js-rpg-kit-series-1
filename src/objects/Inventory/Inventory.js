import { GameObject } from "../../GameObject";
import { resources } from "../../Resource";
import { Sprite } from "../../Sprite";

export class Inventory extends GameObject {
  constructor() {
    super({});
    const sprite = new Sprite({
      resource: resources.images.rod,
    });
    this.addChild(sprite);
  }
}
