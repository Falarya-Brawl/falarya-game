// -----------------------------
// File: index.js
// Author: Paulo Bruno B. Corá
// Date: 15/04/2021
// Brief: Falarya app index
// -----------------------------

// -------------------------
// Import dependencies;
const phaser = require("phaser");

// Import scenes;
const board = require("./scenes/board/board");
// -------------------------

// -------------------------
// Define game configuration;
const config = {
  type: phaser.AUTO,
  antialias: false,
  parent: "phaser-example",
  autoCenter: phaser.Scale.CENTER_BOTH,
  scale: { mode: phaser.Scale.FIT },
  physics: {
    default: "arcade",
  },
  scene: [board],
};
// -------------------------

// -------------------------
// Start the app;
new phaser.Game(config);
// -------------------------
