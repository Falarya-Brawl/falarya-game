// -----------------------------
// File: index.js
// Author: Paulo Bruno B. Corá
// Date: 21/11/2020
// Brief: Falarya Server
// -----------------------------

// -----------------------------
// Import dependencies;
const express = require("express");
const io = require("socket.io");
const bodyParser = require("body-parser");
const cors = require("cors");

// Import modules;
const observer = require("./subscribers/observer");
// -----------------------------

// -----------------------------
class app {
  constructor() {
    this.server = express();
  }

  init() {
    // Set server configurations;
    this.server.use(bodyParser.json());
    this.server.use(cors());
    this.server.use(bodyParser.urlencoded({ extended: false }));

    // Initialize http server;
    const HttpServer = this.server.listen(7014);
    console.log("[HTTP Server] HTTP server initialized");

    // Start web-socket server;
    const webSocketServer = io(HttpServer, {
      path: "/api/websocket/real-time",
    });
    console.log("[Websocket Server] Websocket Server initialized");

    // Start event observer on web-socket server;
    new observer().listen(webSocketServer);
  }
}
// -----------------------------

// -----------------------------
new app().init();
// -----------------------------
