const ioc = require("socket.io-client");
require("dotenv").config();

module.exports = function attachCloudSocketClient() {
  const cloud = ioc.io(process.env.CLOUD_URI, {
    reconnectionDelay: 1000,
    transports: ["websocket"],
    agent: false,
    reconnection: true,
    upgrade: false,
    auth: {
      token: process.env.LICENSE_KEY,
    },
  });

  cloud.on("established", () => console.log("ITS WORKING"));

  cloud.on("connect", () => {
    console.log("Cloud link running :", cloud.connected);
  });

  cloud.on("error", (e) => console.warn("@socketio error", e));

  cloud.on("reconnect", (attempt) =>
    console.warn("@socketio reconnect", attempt)
  );

  // functions to emit to cloud

  // events to listen
};
