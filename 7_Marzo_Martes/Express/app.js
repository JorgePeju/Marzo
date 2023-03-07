const express = require("express");

const app = express()

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('<h1>INDEX</h1>')
})

app.get('/productos', (req, res) => {
    res.send('<h1>Estamos en productos</h1>')
})

app.get('/quienesSomos', (req, res) => {
    res.send('<h1>Quienes somos?</h1> <p>No lo sé, no preguntes</p>')
})

app.get('/contacto', (req, res) => {
    res.send('<h1>Estamos en contacto</h1>')
})


app.listen(port, () => {
    console.log('servidor por el puerto', port)
})

