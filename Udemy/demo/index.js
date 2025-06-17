const express = require('express'); //importa la libreria para crear el servidor 
const path = require('path'); // libreria para manejar rutas de archivos y carpetas
const app = express(); // inicializa la aplicacion de express 
const mongoose = require('mongoose'); // importa mongoose para manejar la base de datos MongoDB

mongoose.connect('mongodb://localhost:27017/farmStand', {  // conecta a la base de datos 'farmStand' en MongoDB
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
}).then(() => {
    console.log('Connected to MongoDB');
})
.catch(err => {
    console.error('MongoDB connection error:', err);
});


app.set('views', path.join(__dirname, 'views')); // define la carpeta donde se encuentran las vistas
app.set('view engine', 'ejs'); // configura el motor de plantilla de ejs

// crea una ruta 
app.get('/dog', (req, res) => {
    res.send('WOOF!')
})

// inicializa el servidor en el puerto 3000
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
})

