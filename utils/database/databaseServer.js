const { createAdapter } = require("@socket.io/mongo-adapter");
const { MongoClient } = require("mongodb");
require("dotenv").config();

const URI = process.env.DATABASE_URI;
const DB = process.env.DB;
const COLLECTION = process.env.COLLECTION;

const mongoClient = new MongoClient(URI, {
  useUnifiedTopology: true,
});

module.exports = async function attachDatabaseServer() {
  try {
    await mongoClient.connect();

    await mongoClient
      .db(DB)
      .collection(COLLECTION, { capped: true, size: 1e6 });
  } catch (error) {
    console.log("@mongoServer attachDatabaseServer", error);
  }

  const db = mongoClient.db(DB).collection(COLLECTION);
};
