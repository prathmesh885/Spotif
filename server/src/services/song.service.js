const { connection } = require("../dbConfig/db")

const createSongService = async (body) => {
    const query = `INSERT INTO Songs (Name, DateOfRelease, Rating) VALUES ("${body.name}", "${body.dateOfRelease}", "${body.rating}")
    `;
    return new Promise((resolve, reject) => {
        connection.query(query, (err, rows) => {
            if(err){
                reject('Failed', err)
                console.log('err', err);
            }
            for(let i=0; i<body.artists.length; i++){
                const secondQuery = `INSERT INTO ArtistSong (artistId, songId) VALUES (${body.artists[i]}, ${rows.insertId})`;
                connection.query(secondQuery, (err, rows) => {
                    if(err){
                        console.log(err)
                        throw new Error('Failed');
                    }
                })
            }
            resolve(body);
        })
    })
}

const getTopTenSongs = async () => {
    const query = `SELECT Songs.Name as songName, Artists.Name as artistName, DateOfRelease, Rating FROM Songs JOIN Artists ON Songs.songId = Artists.Id ORDER BY Songs.Rating DESC, Songs.name, Artists.Name ASC LIMIT 10`;
    return new Promise((resolve, reject) => {
        connection.query(query, (err, rows) => {
            if(err){
                reject('Failed', err)
                console.log('err', err);
            }
            resolve(rows);
        })
    })
}

module.exports = {
    createSongService,
    getTopTenSongs
}