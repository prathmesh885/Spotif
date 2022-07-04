const express = require('express');
const app = express();
var cors = require('cors')
const { connection } = require('./src/dbConfig/db');
const router = require('./src/router/router');

//middlewares
app.use(express.json());
app.use(router)
app.use(cors());

connection.connect(function(err) {
    if(err){
        console.log(err.code);
        console.log(err.fatal);
    }
    console.log('connected');
});

app.get('/ping', (req, res) => {
    console.log('pong');
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
})