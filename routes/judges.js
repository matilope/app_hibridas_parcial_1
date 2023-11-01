import express from 'express';
import JudgesController from '../controllers/judges.js';

const route = express.Router();

route.get('/judges', JudgesController.getJudges);
route.post('/judges', JudgesController.createJudge);
route.get('/judges/:id', JudgesController.getJudgeById);

export default route;