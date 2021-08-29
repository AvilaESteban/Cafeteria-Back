
const express = require("express");
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const cors = require('cors');
const app = express();

// Ruta de la aplicaciòn
const router = require('./routes')

// cadena de conexion  a mongo db
mongoose.connect(' mongodb+srv://Cafeteria:43PZbD41xDbeisnD@cluster0.jfxhr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology:true
    },
 () => console.log('conectado a mongo DB')
);



app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());



app.listen(4002,console.log('servidor iniciado en el puerto 4002'));

app.use("/api", router);