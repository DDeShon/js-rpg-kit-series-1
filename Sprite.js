export class Sprite {
  constructor({
    resource, // image to draw
    frameSize, // size of the image crop
    hFrames, // horizontal frames
    vFrames, // vertical frames
    frame, // which frame to show
    scale, // size of the image
    position, // location of the image on screen
  }) {
    this.resource = resource;
    this.frameSize = frameSize ?? new Vector2(16, 16);
    this.hFrames = hFrames ?? 1;
    this.vFrames = vFrames ?? 1;
    this.frame = frame ?? 0;
    this.scale = scale ?? 1;
    this.position = position ?? new Vector2(0, 0);
    this.buildFrameMap();
  }

  buildFrameMap() {
    let frameCount = 0;
    for (let v = 0; v < this.vFrames; v++) {
      for (let h = 0; h < this.hFrames; h++) {
        this.frameMap.set(
          frameCount,
          new Vector2(this.frameSize.x * h, this.frameSize.y * v)
        );
        frameCount++;
      }
    }
  }

  drawImage(ctx, x, y) {
    if (!this.resource.isLoaded) {
      return;
    }

    // Find the correct sprite sheet to use
    let frameCoordX = 0;
    let frameCoordY = 0;
    const frame = this.frameMap.get(this.frame);
    if (frame) {
      frameCoordX = frame.x;
      frameCoordY = frame.y;
    }

    const frameSizeX = this.frameSize.x;
    const frameSizeY = this.frameSize.y;

    ctx.drawImage(
      this.resource.image,
      frameCoordX,
      frameCoordY,
      frameSizeX, // how much to crop from the row of the sprite sheet
      frameSizeY, // how much to crop from the column of the sprite sheet
      x, // horizontal location to place sprite on canvas
      y, // vertical location to place sprite on canvas
      frameSizeX * this.scale, // how large to scale on X axis
      frameSizeY * this.scale // how large to scale on Y axis
    );
  }
}
