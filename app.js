const http = require('http')
require('dotenv').config()

const express = require('express')

const cors = require('cors')

var corsOptions = {
    origin: '*'
}

const PORT = process.env.PORT

const app = express()

const rutas = require('./Routes/rutas')

app.use('/', cors(corsOptions), rutas)

app.listen(PORT, err => {
    if (err) throw err;
    console.log("%c Servidor corriendo", "color: green");
})