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

// -------------------------

// -------------------------
// Define game configuration;
const config = {
  type: phaser.AUTO,
  antialias: false,
  parent: "phaser-example",
  width: 1280,
  height: 640,
  autoCenter: phaser.Scale.CENTER_BOTH,
  physics: {
    default: "arcade",
  },
};
// -------------------------

// -------------------------
// Start the app;
new phaser.Game(config);
// -------------------------
