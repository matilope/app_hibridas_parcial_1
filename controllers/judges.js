import * as JudgeServices from '../services/judges.js';

async function getJudges(req, res) {
  try {
    const judges = await JudgeServices.getJudges();
    res.status(200).json(judges);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

async function getJudgeById(req, res) {
  const { id } = req.params;
  try {
    const judge = await JudgeServices.getJudgeById(id);
    res.status(200).json(judge);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

async function getJudgeVotesById(req, res) {
  const { id } = req.params;
  try {
    const judge = await JudgeServices.getJudgeVotesById(id);
    res.status(200).json(judge);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

async function createJudge(req, res) {
  try {
    const createdJudge = await JudgeServices.createJudge(req.body);
    res.status(201).json(createdJudge);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

export default {
  getJudges,
  getJudgeById,
  createJudge,
  getJudgeVotesById
}

export {
  getJudges,
  getJudgeById,
  createJudge,
  getJudgeVotesById
}