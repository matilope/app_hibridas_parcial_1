import VotesServices from '../services/votes.js';

async function getVotes(req, res) {
  const { game_id } = req.params;
  try {
    const votes = await VotesServices.getVotes(game_id);
    res.status(200).json(votes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

async function getVotesByJudgeId(req, res) {
  const { judge_id } = req.params;
  try {
    const vote = await VotesServices.getVotesByJudgeId(judge_id);
    res.status(200).json(vote);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

async function createVote(req, res) {
  const { game_id } = req.params;
  try {
    const createdVote = await VotesServices.createVote(game_id, req.body);
    res.status(201).json(createdVote);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

async function getAverage(req, res) {
  const { game_id } = req.params;
  try {
    const getAverga = await VotesServices.getAverage(game_id);
    res.status(201).json(getAverga);
  } catch (err) {
    res.status(500).json({ message: err.message });
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