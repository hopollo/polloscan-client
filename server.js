const express = require("express");
const http = require("http");
const morgan = require("morgan");
const attachCloudSocketClient = require("./utils/cloudServer/cloudSocketClient");
const attachLocalSocketServer = require("./utils/localSocketServer/localSocketServer");
const attachDatabaseServer = require("./utils/database/databaseServer");
require("dotenv").config();

const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT || 3000;

app.use(morgan("tiny"));
app.use(express.static("public"));

server.listen(PORT, () => console.log("Local Server running :", true));

attachCloudSocketClient();
attachLocalSocketServer(server);
//attachDatabaseServer();
