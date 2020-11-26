const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { dbConnection } = require('./database/config');

// crear el servidor de express
const app = express();

//configurar CORS
app.use(cors());

//i1A8iY3hg9o2lBTB, user_test

//connectar a db
dbConnection();

app.get('/', (req, res) => {
    res.status(400).json({
        ok: true,
        msg: 'hola mundo'
    });
});

app.listen(process.env.PORT, () => {
    console.log('Servidor corriendo en puerto ' + process.env.PORT);
});