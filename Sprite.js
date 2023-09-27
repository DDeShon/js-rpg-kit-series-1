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
    this.frameSize = frameSize;
    this.hFrames = hFrames ?? 1;
    this.vFrames = vFrames ?? 1;
    this.frame = frame ?? 0;
    this.scale = scale ?? 1;
    this.position = position;
  }
}
