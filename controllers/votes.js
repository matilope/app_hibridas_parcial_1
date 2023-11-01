import VotesServices from '../services/votes.js';

async function getVoteById(req, res) {
  const { id } = req.params;
  try {
    const vote = await VotesServices.getVoteById(id);
    res.status(200).json(vote);
  } catch (err) {
    res.status(500).json({ msg: err.msg });
  }
}

async function createVote(req, res) {
  const { id } = req.params;
  try {
    const createdVote = await VotesServices.createVote(id, req.body);
    res.status(201).json(createdVote);
  } catch (err) {
    res.status(500).json({ msg: err.msg });
  }
}

export default {
  getVoteById,
  createVote
}

export {
  getVoteById,
  createVote
}