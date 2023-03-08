

const getIndex = (req, res) => {
    res.render('index', {
        titulo: 'Me gustan las cosas',
        parrafo: 'No me gustan las cosas',
    })
};

const getProductos = (req, res) => {
    res.render('productos',{
        titulo:'Me gusta los productos' ,
        parrafo: 'No me gustan las cosas',
        })
};

const getQuienesSomos = (req, res) => {
    res.render('quienesSomos',{
        titulo:'Me gusta quienes somos' ,
        parrafo: 'No me gustan las cosas',
        })
};

const getContacto = (req, res) => {
    res.render('contacto',{
        titulo:'Me gustan el contacto' ,
        parrafo: 'No me gustan las cosas',
        })
};




module.exports = {
    getIndex,
    getProductos,
    getQuienesSomos,
    getContacto,
}