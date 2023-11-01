import { VoteCreateSchema } from "../schemas/votes.js";

function validateCreateVote(req, res, next) {
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