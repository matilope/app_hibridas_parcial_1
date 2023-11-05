import express from 'express';
import JudgesController from '../controllers/judges.js';
import { validateCreateJudge } from '../middlewares/judges.js';

const route = express.Router();

route.route('/judges')
  .get(JudgesController.getJudges)
  .post([validateCreateJudge], JudgesController.createJudge);
route.get('/judges/:id', JudgesController.getJudgeById);
route.get('/judges/:id/votes', JudgesController.getJudgeVotesById);

export default route;