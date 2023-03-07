const express = require('express');

// configurar servidor
const app = express()

const port = process.env.PORT || 3000;



app.use(express.static('public'));
// Establecer ejs como template engine
app.set('view engine' , 'ejs');
// Estableder cual va a ser la carpeta de vistas
app.set("views",__dirname + "/views");
// rutas

app.get('/', (req, res) => {
    res.render('index',{
        titulo:'Me gustan las cosas' ,
        parrafo: 'No me gustan las cosas',
        })
})

app.get('/productos', (req, res) => {
    res.render({})
})

app.get('/quienesSomos', (req, res) => {
    res.render('<h1>Quienes somos?</h1>')
})

app.get('/contacto', (req, res) => {
    res.render('<h1>Estamos en contacto</h1>')
})

// Chasqueador
app.listen(port, () => {
    console.log('servidor por el puerto', {port})
})

