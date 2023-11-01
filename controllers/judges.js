import * as JudgeServices from '../services/games.js';

async function getJudges(req, res) {
  try {
    const judges = await JudgeServices.getJudges();
    res.status(200).json(judges);
  } catch (err) {
    res.status(500).json({ msg: err.msg });
  }
}

async function getJudgeById(req, res) {
  const { id } = req.params;
  try {
    const judge = await JudgeServices.getJudgeById(id);
    res.status(200).json(judge);
  } catch (err) {
    res.status(500).json({ msg: err.msg });
  }
}

async function createJudge(req, res) {
  try {
    const createdJudge = await JudgeServices.createJudge(req.body);
    res.status(201).json(createdJudge);
  } catch (err) {
    res.status(500).json({ msg: err.msg });
  }
}

export default {
  getJudges,
  getJudgeById,
  createJudge
}

export {
  getJudges,
  getJudgeById,
  createJudge
}