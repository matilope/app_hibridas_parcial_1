import { JudgeCreateSchema } from "../schemas/judges.js";

function validateCreateJudge(req, res, next) {
  JudgeCreateSchema.validate(req.body, {
    stripUnknown: true,
    abortEarly: false
  })
    .then((judge) => {
      req.body = judge;
      next();
    })
    .catch((err) => {
      res.status(400).json(err);
    });
}

export {
  validateCreateJudge
}