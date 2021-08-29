// ejemplo 1
// const express = require('express');
// const app = express();

// app.get("/", function(req,res,next){
//     return res.send("Hola desde express")
// });

// app.get("/inicio", function(req,res,next){
//     return res.send('<h1>Inicio</h1>')
// })

// app.listen(8080, console.log("servidor iniciado en puerto 8080"));

// ejemplo 2
// const express = require("express");
// const router = express.Router();
// const app = express();

// router.get('/', function(req,res,next){
//     return res.send('Inicio desde express');
// })

// router.get('/inicio', function(req,res,next){
//     return res.send('Inicio 2');
// })

// router.get('/contact', function(req,res,next){
//     return res.send('contact');
// })

// app.use('/api',router);

// app.listen(8080, console.log('servidor iniciado en puerto 8080'))

// ejemplo 3
// const express = require("express");
// const bodyParser = require('body-parser');
// const router = express.Router();
// const app = express();

// const productos = [];

// app.use(bodyParser.urlencoded({extended:false}));
// app.use(bodyParser.json());

// router.get("/", function(req,res,next){
//     return res.send('Productos desde express')
// });
 
// router.get("/productos", function(req,res,next){
//     return res.json({productos});
// });

// router.post("/productos", function(req,res,next){
//     const nombreProducto = req.body.nombreProducto;
//     const precioProducto = req.body.precioProducto;
//     const categoria = req.body.categoria;
//     if(!productos.includes(nombreProducto)){
//         productos.push({
//             nombreProducto,
//             precioProducto,
//             categoria
//         });
//         return res.json({
//             message: "Producto guardado exitosamente"
//         });
//     }
//     return res.json({
//         message: "El producto ya existe"
//     })
// })

// router.put("/productos",function(req,res,next){
//     const nombre = req.body.nombreProducto;
//     const index = productos.findIndex(el => el.nombre === nombre);
    
//     if(index > -1){
//         productos[index].nombre = req.body.nuevoProducto;
//         return res.json({
//             message: "Producto actualizado  exitosamente"
//         })
//     }

//     return res.json({
//         message: "Producto no actualizado"
//     })
// })

// router.delete("/productos", function(req,res,next){
//     const index = productos.indexOf(req.body.nombreProducto)
//     productos.splice(index, 1);

//     return res.json({
//         message: "Producto eliminado exitosamente"
//     })
// })

// app.listen(8080,console.log('servidor iniciado en el puerto 8080'));

// app.use("/api", router);












// ejemplo 4 
const express = require("express");
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const cors = require('cors');
const app = express();

// Ruta de la aplicaciòn
const router = require('./routes')

// cadena de conexion  a mongo db
// mongodb+srv://Cafeteria:43PZbD41xDbeisnD@cluster0.jfxhr.mongodb.net/test
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