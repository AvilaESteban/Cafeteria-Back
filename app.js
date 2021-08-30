const express = require("express");
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const cors = require('cors');
const app = express();

const {initMongo} = require('./db')
require('dotenv').config();
initMongo();

// Ruta de la aplicaciòn
const router = require('./routes');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());


const PORT = process.env.PORT || 4002
app.listen(PORT ,console.log(`servidor iniciado en el puerto${PORT}`))

app.use("/api", router);