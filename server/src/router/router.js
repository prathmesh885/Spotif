const express = require('express');
const artistRouter = require('./artist.router');
const songRouter = require('./songs.router');
const router = express.Router();

router.use('/song', songRouter)
router.use('/artist', artistRouter)

module.exports = router;