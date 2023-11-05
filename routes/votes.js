import express from 'express';
import VotesController from '../controllers/votes.js';
import { validateCreateVote } from '../middlewares/votes.js';

const route = express.Router();

route.route('/:game_id/votes')
  .get(VotesController.getVotes)
  .post([validateCreateVote], VotesController.createVote);
route.get('/:game_id/average', VotesController.getAverage);

export default route;
