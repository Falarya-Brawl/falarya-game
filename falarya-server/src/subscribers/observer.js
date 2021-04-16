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
        webSocketServer.emit("damage_taken");
      });

      socket.on("player_moved", (event) =>
        socket.broadcast.emit("player_moved", event)
      );

      socket.on("replace_player", (event) =>
        socket.broadcast.emit("replace_player", event)
      );

      socket.on("start_horde", () => {
        this.isHordeOn = true;
        EnemyEmitting();
      });

      socket.on("game_over", () => {
        this.isHordeOn = false;
      });

      socket.on("disconnect", () => {
        const leaverIndex = this.players.findIndex(
          (item) => item === socket.id
        );

        this.players.splice(leaverIndex, 1);
        webSocketServer.emit("remove_player", socket.id);

        this.players.length === 0 && (this.isHordeOn = false);
      });
    });

    const EnemyEmitting = () => {
      return setInterval(() => {
        if (this.isHordeOn) {
          webSocketServer.emit("created_enemy", {
            speed: Math.floor(Math.random() * 200) + 1,
          });
        }
      }, 5000);
    };

    console.log("[Websocket Server] Listening to events");
  }
};
// -----------------------------
