import express from 'express';
import VotesController from '../controllers/votes.js';
import { validateCreateVote } from '../middlewares/votes.js';

const route = express.Router();

route.route('/:id/votes/:judge_id')
  .get(VotesController.getVoteById)
  .post([validateCreateVote], VotesController.createVote);

export default route;
