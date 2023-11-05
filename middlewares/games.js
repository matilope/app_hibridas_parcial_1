import { GameCreateSchema, GameUpdateSchema } from "../schemas/games.js";

function validateCreateGame(req, res, next) {
  GameCreateSchema.validate(req.body, {
    stripUnknown: true,
    abortEarly: false
  })
    .then((game) => {
      req.body = game;
      next();
    })
    .catch((err) => {
      res.status(400).json(err);
    });
}

function validateUpdateGame(req, res, next) {
  GameUpdateSchema.validate(req.body, {
    stripUnknown: true,
    abortEarly: false
  })
    .then((game) => {
      req.body = game;
      next();
    })
    .catch((err) => {
      res.status(400).json(err);
    });
}

export {
  validateCreateGame,
  validateUpdateGame
}