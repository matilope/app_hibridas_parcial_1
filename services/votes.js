import { MongoClient, ObjectId } from 'mongodb';

const client = new MongoClient('mongodb://127.0.0.1:27017');
const db = client.db("GameJAM");

const GamesVotesCollection = db.collection("votes");

async function getVoteById(idGame) {
  await client.connect();
  return GamesVotesCollection.find({ game_id: new ObjectId(idGame) }).toArray();
}

async function createVote(idGame, vote) {
  await client.connect();
  const newVote = {
    ...vote,
    game_id: new ObjectId(idGame)
  }
  await GamesVotesCollection.insertOne(newVote);
  return newVote;
}

export default {
  getVoteById,
  createVote
}

export {
  getVoteById,
  createVote
}