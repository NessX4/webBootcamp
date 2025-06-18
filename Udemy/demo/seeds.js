const mongoose = require('mongoose'); // importa mongoose para manejar la base de datos MongoDB

const Product = require('./models/products'); // importa el modelo de productos definido en otro archivo
const { name } = require('ejs');

mongoose.connect('mongodb://localhost:27017/farmStand', {  // conecta a la base de datos 'farmStand' en MongoDB
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
}).then(() => {
    console.log('Connected to MongoDB');
})
.catch(err => {
    console.error('MongoDB connection error:', err);
});

const p = new Product({
    name: 'Ruby Grapefruit',
    price: 1.99,
    category: 'fruit'
})

p.save().then(p => {
    console.log(p);
})
.catch(e => {
    console.log(e);
})