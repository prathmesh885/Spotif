const express = require('express');
const { createSongController, getTopTenSongsController } = require('../controllers/song.controller');
const songRouter = express.Router();

songRouter.post('/createsong', createSongController);
songRouter.get('/toptensongs', getTopTenSongsController);

module.exports = songRouter;