const socket = io();

socket.on("established", connectionEstablished);

function connectionEstablished() {
  console.log("Connected with server...");
}
