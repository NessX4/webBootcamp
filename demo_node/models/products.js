const mongoose = require('mongoose'); // importa mongoose para manejar la base de datos MongoDB

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    category: {
        type: String,
        enum: ['fruit', 'vegetable', 'dairy']
    }
})

const Product = mongoose.model('Product', productSchema); // crea un modelo de producto basado en el esquema definido

module.exports = Product; // exporta el modelo para que pueda ser utilizado en otras partes de la aplicación