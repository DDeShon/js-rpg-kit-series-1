export class GameLoop {
  constructor(update, render) {
    this.lastFrameTime = 0;
    this.accumulatedTime = 0;
    this.timeStep = 1000 / 60; // 60 fps

    this.update = update;
    this.render = render;

    this.rafId = null; // request animation frame ID
    this.isRunning = false;
  }

  mainLoop = (timestamp) => {
    if (!this.isRunning) return;

    let deltaTime = timestamp - this.lastFrameTime;
    this.lastFrameTime = timestamp;

    // accumulate all the time since the last frame
    this.accumulatedTime += deltaTime;

    // fixed time step updates
    // if there's enough accumulated time to run one or more fixed updates
    while (this.accumulatedTime >= this.timeStep) {
      this.update(this.timeStep); // pass the fixed time step
      this.accumulatedTime -= this.timeStep;
    }

    // Render
    this.render();

    this.rafId = requestAnimationFrame(this.mainLoop);
  };
}
