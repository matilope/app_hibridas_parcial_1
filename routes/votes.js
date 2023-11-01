import express from 'express';
import VotesController from '../controllers/votes.js';
import { validateCreateVote } from '../middlewares/votes.js';

const route = express.Router();

route.route('/:id/votes', [validateCreateVote])
  .get(VotesController.getVoteById)
  .post(VotesController.createVote);

export default route;
