const express = require('express');

// configurar servidor
const app = express()

const port = process.env.PORT || 3000;


// rutas
app.get('/', (req, res) => {
    res.send('<h1>INDEX</h1>')
})

app.get('/productos', (req, res) => {
    res.send('<h1>Estamos en productos</h1>')
})

app.get('/quienesSomos', (req, res) => {
    res.send('<h1>Quienes somos?</h1>')
})

app.get('/contacto', (req, res) => {
    res.send('<h1>Estamos en contacto</h1>')
})

// Chasqueador
app.listen(port, () => {
    console.log('servidor por el puerto', {port})
})

