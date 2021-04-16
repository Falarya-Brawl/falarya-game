// -----------------------------
// File: index.js
// Author: Paulo Bruno B. Corá
// Date: 21/11/2020
// Brief: Falarya Server
// -----------------------------

// -----------------------------
module.exports = class observer {
  constructor() {
    this.players = [];
  }

  listen(webSocketServer) {
    webSocketServer.on("connect", (socket) => {
      console.log("[Websocket Server] Client connected");
      socket.broadcast.emit("add_player", { socketid: [socket.id] });
      socket.emit("add_player", { socketid: this.players });
      this.players.push(socket.id);

      socket.on("damage_taken", (event) => {
        socket.broadcast.emit("damage_taken", { damage: 1 });
      });

      socket.on("player_moved", (event) =>
        socket.broadcast.emit("player_moved", event)
      );

      socket.on("replace_player", (event) =>
        socket.broadcast.emit("replace_player", event)
      );

      socket.on("disconnect", () => {
        const leaverIndex = this.players.findIndex(
          (item) => item === socket.id
        );

        this.players.splice(leaverIndex, 1);
        webSocketServer.emit("remove_player", socket.id);
      });
    });

    setInterval(() => {
      if (this.players.length == 2) {
        webSocketServer.emit("created_enemy", {
          speed: Math.floor(Math.random() * 200) + 1,
        });
      }
    }, 10000);
    console.log("[Websocket Server] Listening to events");
  }
};
// -----------------------------
