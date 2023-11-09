import { MongoClient, ObjectId } from 'mongodb';
import { getJudgeById } from './judges.js';
import { getGameById, updateGame } from './games.js';

const client = new MongoClient('mongodb://127.0.0.1:27017');
const db = client.db("GameJAM");

const GamesVotesCollection = db.collection("votes");

async function getVotes(idGame) {
  await client.connect();
  return GamesVotesCollection.find({ game_id: new ObjectId(idGame) }).toArray();
}

async function getVotesByJudgeId(idJudge) {
  await client.connect();
  return GamesVotesCollection.find({ judge_id: new ObjectId(idJudge) }).toArray();
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
  let gameScore = gameExist.totalScore || 0;
  for (const key in vote.categories) {
    gameScore += vote.categories[key];
  }
  await updateGame(idGame, { totalScore: gameScore });
  const { name } = await getJudgeById(idJudge);
  const newVote = {
    ...vote,
    judge_id: idJudge,
    judge_name: name,
    game_id: new ObjectId(idGame),
    game_name: gameExist.name
  }
  await GamesVotesCollection.insertOne(newVote);
  return newVote;
}

async function getAverage(idGame) {
  const game = await getGameById(idGame);
  const votes = await GamesVotesCollection.find({ game_id: new ObjectId(idGame) }).toArray();
  if (votes.length) {
    throw new Error(`El juego ${game.name} no tiene votaciones`);
  }
  let totalGameplay = 0, totalArt = 0, totalSound = 0, totalAffinity = 0;
  for (const { categories } of votes) {
    totalGameplay += categories.gameplay;
    totalArt += categories.art;
    totalSound += categories.sound;
    totalAffinity += categories.affinity;
  }
  return {
    _id: game._id,
    game: game,
    averageGameplay: (totalGameplay / votes.length),
    averageArt: (totalArt / votes.length),
    averageSound: (totalSound / votes.length),
    averageAffinity: (totalAffinity / votes.length)
  }
}

export default {
  getVotes,
  getVotesByJudgeId,
  createVote,
  getAverage
}

export {
  getVotes,
  getVotesByJudgeId,
  createVote,
  getAverage
}