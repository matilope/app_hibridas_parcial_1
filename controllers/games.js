import * as GameServices from '../services/games.js';

async function getGames(req, res) {
  try {
    const games = await GameServices.getGames();
    res.status(200).json(games);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

async function getGameById(req, res) {
  const { id } = req.params;
  try {
    const game = await GameServices.getGameById(id);
    res.status(200).json(game);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

async function updateGame(req, res) {
  const { id } = req.params;
  try {
    const updatedGame = await GameServices.updateGame(id, req.body);
    res.status(200).json(updatedGame);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

async function createGame(req, res) {
  try {
    const createdGame = await GameServices.createGame(req.body);
    res.status(201).json(createdGame);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

async function getGamesOrderByScore(req, res) {
  const { genre } = req.query;
  try {
    const games = await GameServices.getGamesOrderByScore(genre ?? {});
    res.status(200).json(games);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

export default {
  getGames,
  getGameById,
  updateGame,
  createGame,
  getGamesOrderByScore
}

export {
  getGames,
  getGameById,
  updateGame,
  createGame,
  getGamesOrderByScore
}