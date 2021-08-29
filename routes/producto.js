const {Productos} = require('../model');
const router = require("express").Router();

// leer lista de productos
router.get("/", async function(req,res){
    const {nombreProducto} = req.query;
    let productos;
    if(nombreProducto){
        productos = await Productos.find({nombreProducto});
    }else{
        productos = await Productos.find();
    }
    return res.json({productos})
});

// ver producto por id
router.get("/:id", async function(req,res){
    const {id} = req.params;
    const productos = await Productos.findById(id);
    res.json(productos);
})

// Ingresar nuevo producto
router.post("/", async function(req,res){
    const {nombreProducto,precioProducto,categoria} = req.body;

    const productos = new Productos({nombreProducto,precioProducto,categoria});
    const response = await productos.save();
    res.json(response);
});

// Actualizar un producto
router.put("/:id", async function(req,res){
    const { id } = req.params;
    const { ...all} = req.body;
    // en...all guardamos todo el objeto de datos 
  console.log('Modif' ,req.body)
  console.log(id)
    const response = await Productos.findByIdAndUpdate(id, all , {new:true});
    if(response){
        console.log('respuesta',response);
        res.json({message: "Producto actualizado exitosamente"});
    }else{
        res.json({message: "No se pudo actualizar"});
    }
});

// eliminar un producto
router.delete("/:id", async function(req,res){
    const {id} = req.params;
    const response = await Productos.findByIdAndDelete(id);
    if(response){
        console.log(response);
        res.json({message: "Producto eliminado exitosamente"});
    }else{
        res.json({message: "El producto no pudo ser eliminado exitosamente"})
    }
})

module.exports = router;