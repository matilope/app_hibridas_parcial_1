import express from 'express';
import GamesController from '../controllers/games.js';
import GamesVotesRoute from './votes.js';
import { validateCreateGame, validateUpdateGame } from '../middlewares/games.js';

const route = express.Router();

route.get('/games', GamesController.getGames);
route.post('/games', [validateCreateGame], GamesController.createGame);
route.patch('/games/:id', [validateUpdateGame], GamesController.updateGame);
route.get('/games/:id', GamesController.getGameById);

route.use('/games', GamesVotesRoute);

export default route;