// -----------------------------
// File: index.js
// Author: Paulo Bruno B. Corá
// Date: 15/04/2021
// Brief: Falarya app game over scene;
// -----------------------------

// -------------------------
// Import dependencies;
const phaser = require("phaser");

// -------------------------

// -------------------------
// Define scene;
class gameover extends phaser.Scene {
  constructor() {
    super({ key: "GameOver" });
  }

  // -------------------------
  // Preload scene resources method;
  preload() {}
  // -------------------------

  // -------------------------
  // Create scene main method;
  create() {
    this.mountSceneScreen();
  }
  // -------------------------

  // -------------------------
  // Mount screen configs method;
  mountSceneScreen() {
    this.add
      .text(0, 200, "Game Over", {
        font: "150px Verdana",
        color: "red",
      })
      .setInteractive()
      .on("pointerdown", () => {});

    this.playRect = this.add
      .rectangle(600, 385, 200, 100, "black", 70)
      .setInteractive()
      .on("pointerdown", () => {
        window.location.reload();
      });
    this.playButton = this.add
      .text(640, 360, "Try again", {
        font: "50px Verdana",
      })
      .setInteractive()
      .on("pointerdown", () => {
        window.location.reload();
      });
  }
  // -------------------------
}
// -------------------------
// -------------------------
module.exports = gameover;
// -------------------------
