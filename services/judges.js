import { MongoClient, ObjectId } from "mongodb";
import { getVotesByJudgeId } from "./votes.js";

const client = new MongoClient("mongodb://127.0.0.1:27017");
const db = client.db("GameJAM");
const JudgeCollection = db.collection('judges');

async function getJudges() {
  await client.connect();
  return JudgeCollection.find({}).toArray();
}

async function getJudgeById(id) {
  await client.connect();
  const judge = await JudgeCollection.findOne({ _id: new ObjectId(id) });
  return judge;
}

async function getJudgeVotesById(id) {
  await client.connect();
  const judgeVotes = await getVotesByJudgeId(id);
  const judgeInfo = {
    judge_id: id,
    votes: []
  }
  for (const { game_name, categories } of judgeVotes) {
    const voteInfo = {
      game_name,
      categories
    };
    judgeInfo.votes.push(voteInfo);
  }
  return judgeInfo;
}

async function createJudge(judge) {
  await client.connect();
  await JudgeCollection.insertOne(judge);
  return judge;
}

export {
  getJudges,
  getJudgeById,
  createJudge,
  getJudgeVotesById
}

export default {
  getJudges,
  getJudgeById,
  createJudge,
  getJudgeVotesById
}