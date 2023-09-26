class Resources {
  constructor() {
    // Everything we plan to download
    this.toLoad = {
      sky: "sprites/sky.png",
      ground: "sprites/ground.png",
      hero: "sprites/hero-sheet.png",
      shadow: "sprites/shadow.png",
    };

    // A bucket to keep all images
    this.images = {};

    // Load each image
    Object.keys(this.toLoad).forEach((key) => {
      const img = new Image();
      img.src = this.toLoad[key];
    });
  }
}
