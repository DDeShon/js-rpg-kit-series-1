export class FrameIndexPattern {
  constructor(animationConfig) {
    this.currentTime = 0;
    this.animationConfig = animationConfig;
    this.duration = animationConfig.duration ?? 500;
  }

  step(delta) {
    this.currentTime += delta;
    if (this.currentTime >= this.duration) {
      this.currentTime = 0;
    }
  }
}
