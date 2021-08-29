const mongoose = require('mongoose');

const Productos = mongoose.model('productos', {
    nombreProducto: String,
    precioProducto: Number,
    categoria: String
});

module.exports = {Productos};