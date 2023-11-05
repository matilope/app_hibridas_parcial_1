import { MongoClient, ObjectId } from 'mongodb';
import { getJudgeById } from './judges.js';
import { getGameById } from './games.js';

const client = new MongoClient('mongodb://127.0.0.1:27017');
const db = client.db("GameJAM");

const GamesVotesCollection = db.collection("votes");

async function getVotes(idGame) {
  await client.connect();
  return GamesVotesCollection.find({ game_id: new ObjectId(idGame) }).toArray();
}

async function getVoteById(idGame) {
  await client.connect();
  return GamesVotesCollection.find({ game_id: new ObjectId(idGame) }).toArray();
}

async function createVote(idGame, vote) {
  await client.connect();
  const idJudge = new ObjectId(vote.judge_id);
  const judgeExist = await getJudgeById(idJudge);
  if (!judgeExist) {
    throw new Error("El juez no existe");
  }
  const gameExist = await getGameById(idGame);
  if (!gameExist) {
    throw new Error("El juego no existe");
  }
  const judgeAlreadyVotedOnThisGame = await GamesVotesCollection.findOne({ game_id: new ObjectId(idGame), judge_id: idJudge });
  if (judgeAlreadyVotedOnThisGame) {
    throw new Error("El juez ya votó en este juego");
  }
  const { name } = await getJudgeById(idJudge);
  const newVote = {
    ...vote,
    judge_id: idJudge,
    judge_name: name,
    game_id: new ObjectId(idGame)
  }
  await GamesVotesCollection.insertOne(newVote);
  return newVote;
}

async function getAverage(idGame) {
  const game = await getGameById(idGame);
  const pipeline = [
    {
      $match: { game_id: new ObjectId(idGame) },
    },
    {
      $group: {
        _id: "$game_id",
        game: { $first: game },
        averageGameplay: { $avg: "$categories.gameplay" },
        averageArt: { $avg: "$categories.art" },
        averageSound: { $avg: "$categories.sound" },
        averageAffinity: { $avg: "$categories.affinity" },
      },
    },
  ];

  const categoryAverages = await GamesVotesCollection.aggregate(pipeline).toArray();
  return categoryAverages;
}

export default {
  getVotes,
  getVoteById,
  createVote,
  getAverage
}

export {
  getVotes,
  getVoteById,
  createVote,
  getAverage
}