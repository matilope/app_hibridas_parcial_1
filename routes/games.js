import express from 'express';
import GamesController from '../controllers/games.js';
import GamesVotesRoute from './votes.js';
import { validateCreateGame, validateUpdateGame } from '../middlewares/games.js';

const route = express.Router();

route.route('/games')
  .get(GamesController.getGames)
  .post([validateCreateGame], GamesController.createGame);
route.route('/games/:id')
  .get(GamesController.getGameById)
  .patch([validateUpdateGame], GamesController.updateGame);

route.use('/games', GamesVotesRoute);

export default route;