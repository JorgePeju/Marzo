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
    res.render('index',{
        titulo:'Me gustan los productos' ,
        parrafo: 'No me gustan las cosas',
        })
})

app.get('/quienesSomos', (req, res) => {
    res.render('quienesSomos',{
        titulo:'Me gusta quienes somos' ,
        parrafo: 'No me gustan las cosas',
        })
})

app.get('/contacto', (req, res) => {
    res.render('contacto',{
        titulo:'Me gustan el contacto' ,
        parrafo: 'No me gustan las cosas',
        })
})

// Chasqueador
app.listen(port, () => {
    console.log('servidor por el puerto', {port})
})

