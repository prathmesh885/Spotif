const { createSongService, getTopTenSongs } = require("../services/song.service")

const createSongController = async (req, res) => {
    try{
        const response = await createSongService(req.body);
        res.json(response)
    }catch(err){
        console.log("err", err);
        res.status(400).json('Internal server error')
    }
}

const getTopTenSongsController = async (req, res) => {
    try{
        const response = await getTopTenSongs();
        res.json(response)
    }catch(err){
        res.status(400).json('Internal server error')
    }
}

module.exports = {
    createSongController,
    getTopTenSongsController
}