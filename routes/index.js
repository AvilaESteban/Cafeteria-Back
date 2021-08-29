const router = require("express").Router();
const rutaProductos = require('./producto')

// Ruta raiz
router.get("/", function(req,res){
    return res.send("Hola desde express");
})

// otras rutas
router.use("/productos", rutaProductos);


module.exports = router;