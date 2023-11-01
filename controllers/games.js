import * as GameServices from '../services/games.js';

async function getGames(req, res) {
  try {
    const games = await GameServices.getGames();
    res.status(200).json(games);
  } catch (err) {
    res.status(500).json({ msg: err.msg });
  }
}

async function getGameById(req, res) {
  const { id } = req.params;
  try {
    const game = await GameServices.getGameById(id);
    res.status(200).json(game);
  } catch (err) {
    res.status(500).json({ msg: err.msg });
  }
}

async function updateGame(req, res) {
  const { id } = req.params;
  try {
    const updatedGame = await GameServices.updateGame(id, req.body);
    res.status(200).json(updatedGame);
  } catch (err) {
    res.status(500).json({ msg: err.msg });
  }
}

async function createGame(req, res) {
  try {
    const createdGame = await GameServices.createGame(req.body);
    res.status(201).json(createdGame);
  } catch (err) {
    res.status(500).json({ msg: err.msg });
  }
}

export default {
  getGames,
  getGameById,
  updateGame,
  createGame
}

export {
  getGames,
  getGameById,
  updateGame,
  createGame
}