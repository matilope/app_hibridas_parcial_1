import { VoteCreateSchema } from "../schemas/votes.js";

function validateCreateVote(req, res, next) {
  const { id, judge_id } = req.params;
  req.body.game_id = id;
  req.body.judge_id = judge_id;

  VoteCreateSchema.validate(req.body, {
    stripUnknown: true,
    abortEarly: false
  })
    .then((vote) => {
      req.body = vote;
      next();
    })
    .catch((err) => {
      res.status(400).json(err);
    });
}

export {
  validateCreateVote
}