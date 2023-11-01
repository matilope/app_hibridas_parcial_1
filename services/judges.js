import { MongoClient, ObjectId } from "mongodb";

const client = new MongoClient("mongodb://127.0.0.1:27017");
const db = client.db("GameJAM");
const JudgeCollection = db.collection('judges');

async function getJudges() {
  await client.connect();
  return JudgeCollection.find({}).toArray();
}

async function getJudgeById(id) {
  await client.connect();
  return JudgeCollection.findOne({ _id: new ObjectId(id) });
}

async function createJudge(judge) {
  await client.connect();
  await JudgeCollection.insertOne(judge);
  return judge;
}

export {
  getJudges,
  getJudgeById,
  createJudge
}

export default {
  getJudges,
  getJudgeById,
  createJudge
}