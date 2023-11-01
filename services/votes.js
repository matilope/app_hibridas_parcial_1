import { MongoClient, ObjectId } from 'mongodb';

const client = new MongoClient('mongodb://127.0.0.1:27017');
const db = client.db("GameJAM");

const GamesVotesCollection = db.collection("votes");

async function getVoteById(idGame) {
  await client.connect();
  return GamesVotesCollection.find({ game_id: new ObjectId(idGame) }).toArray();
}

async function createVote(idGame, idJudge, vote) {
  await client.connect();
  const judgeAlreadyVotedOnThisGame = await GamesVotesCollection.findOne({ game_id: new ObjectId(idGame), judge_id: new ObjectId(idJudge) });
  if (judgeAlreadyVotedOnThisGame) {
    throw new Error("El juez ya votó en este juego");
  }
  const newVote = {
    ...vote,
    game_id: new ObjectId(idGame),
    judge_id: new ObjectId(idJudge)
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