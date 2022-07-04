const express = require('express');
const { createArtistController, getTopTenArtistController, getAllArtistsController } = require('../controllers/artist.controller');
const artistRouter = express.Router();

artistRouter.post('/createartist', createArtistController);
artistRouter.get('/toptenartist', getTopTenArtistController);
artistRouter.get('/getallartists', getAllArtistsController);

module.exports = artistRouter;