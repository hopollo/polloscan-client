const { Server } = require("socket.io");

module.exports = function attachLocalSocketServer(server) {
  const io = new Server(server);
  if (io) console.log("SocketServer running", true);

  io.on("connection", (socket) => {
    console.log("ENTER :", socket.id);

    socket.emit("established", true);

    socket.on("disconnect", () => {
      console.log("LEAVE :", socket.id);
    });
  });
};
