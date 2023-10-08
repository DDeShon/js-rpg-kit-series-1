import { events } from "../../Events.js";
import { GameObject } from "../../GameObject.js";
import { resources } from "../../Resource.js";
import { Sprite } from "../../Sprite.js";
import { Vector2 } from "../../Vector2.js";

export class Inventory extends GameObject {
  constructor() {
    super({
      position: new Vector2(0, 2),
    });

    this.items = [
      {
        id: -1,
        image: resources.images.rod,
      },
    ];

    // reacto to hero picking up an item
    events.on("HERO_PICKS_UP_ITEM", this, (data) => {
      // show something on the screen
    });

    // draw initial state on load
    this.renderInventory();
  }

  renderInventory() {
    // remove previous children
    this.children.forEach((child) => child.destroy());

    // draw fresh from the latest version of the list
    this.items.forEach((item) => {
      const sprite = new Sprite({
        resource: item.image,
      });
      this.addChild(sprite);
    });
  }
}
