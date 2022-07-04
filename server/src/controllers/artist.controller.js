const { createArtistService, getTopTenArtist, getAllArtists } = require("../services/artist.service")

const createArtistController = async(req, res) => {
    try{
        const response = await createArtistService(req.body);
        res.json(response)
    }catch(err){
        res.status(400).json('Internal server error')
    }
}

const getTopTenArtistController = async(req, res) => {
    try{
        const response = await getTopTenArtist();
        res.json(response)
    }catch(err){
        res.status(400).json('Internal server error')
    }
}

const getAllArtistsController = async(req, res) => {
    try{
        const response = await getAllArtists();
        res.json(response)
    }catch(err){
        res.status(400).json('Internal server error')
    }
}

module.exports = {createArtistController, getTopTenArtistController, getAllArtistsController};