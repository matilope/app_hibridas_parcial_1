import { VoteCreateSchema } from "../schemas/votes.js";

function validateCreateVote(req, res, next) {
  const { game_id } = req.params;
  req.body.game_id = game_id;

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