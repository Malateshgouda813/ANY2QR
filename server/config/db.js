const { MongoClient } = require("mongodb");

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);

let db;

async function connectDB() {
  await client.connect();
  console.log("MongoDB Connected ✅");

  db = client.db(process.env.DB_NAME);
}

function getDB() {
  return db;
}

module.exports = { connectDB, getDB };