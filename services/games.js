import { MongoClient, ObjectId } from "mongodb";

const client = new MongoClient("mongodb://127.0.0.1:27017");
const db = client.db("GameJAM");
const GameCollection = db.collection('games');

async function getGames(filter = {}) {
  await client.connect();
  if (filter.length) {
    filter = { genre: { $regex: filter, $options: "i" } }
  }
  return GameCollection.find(filter).toArray();
}

async function getGameById(id) {
  await client.connect();
  return GameCollection.findOne({ _id: new ObjectId(id) });
}

async function updateGame(id, game) {
  await client.connect();
  return GameCollection.updateOne({ _id: new ObjectId(id) }, { $set: game });
}

async function createGame(game) {
  await client.connect();
  await GameCollection.insertOne(game);
  return game;
}

export {
  getGames,
  getGameById,
  updateGame,
  createGame
}

export default {
  getGames,
  getGameById,
  updateGame,
  createGame
}