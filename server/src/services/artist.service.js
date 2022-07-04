const { pool, connection } = require("../dbConfig/db")

const createArtistService = (body) => {
    const query = `INSERT INTO Artists (Name, DOB, Bio) VALUES ("${body.name}", "${body.dob}", "${body.bio}")`
    return new Promise((resolve, reject) => {
        connection.query(query, (err, rows) => {
            if(err){
                reject('Failed', error)
                console.log('err', err);
            }
            resolve(body);
        })
    })
}

const getTopTenArtist = () => {
    const query = `SELECT Artists.Id, Artists.Name as artistName, DOB, Songs.Name as songName, Songs.songId FROM Artists JOIN ArtistSong ON ArtistSong.artistId = Artists.Id JOIN Songs ON Songs.songId = ArtistSong.songId`
    let response = [];
    let obj = { songNames: [] }
    let id = 0;
    return new Promise((resolve, reject) => {
        connection.query(query, (err, rows) => {
            if(err){
                reject('Failed', error)
                console.log('err', err);
            }
        resolve(rows);
        })
    })
}

const getAllArtists = () => {
    const query = `SELECT * FROM Artists`
    return new Promise((resolve, reject) => {
        connection.query(query, (err, rows) => {
            if(err){
                reject('Failed', error)
                console.log('err', err);
            }
            resolve(rows);
        })
    })
}

module.exports = {createArtistService, getTopTenArtist, getAllArtists};