const Servicio = require('../models/servicioModel');






const getIndex = (req, res) => {
    res.render('index', {
        titulo: 'Me gustan las cosas',
        parrafo: 'No me gustan las cosas',
    })
};

const getProductos = (req, res) => {
    res.render('productos', {
        titulo: 'Me gusta los productos',
        parrafo: 'No me gustan las cosas',
    })
};

const getQuienesSomos = (req, res) => {
    res.render('quienesSomos', {
        titulo: 'Me gusta quienes somos',
        parrafo: 'No me gustan las cosas',
    })
};

const getContacto = (req, res) => {
    res.render('contacto', {
        titulo: 'Me gustan el contacto',
        parrafo: 'No me gustan las cosas',
    })
};

// const getServicios = (req, res) => {
//     res.render('servicios',{
//         titulo:'Me gustan los servicios' ,
//         parrafo: 'No me gustan las cosas',
//         })
// };



// dentro de lo que queramos llamar
// Servicio.find((error, servicios) => {

//     if (error) {
//     return res.send('este es el error', {
//         ok:false,
//         msg:'Error al contactar',
//     }else{

//     } )    
//     }
// })


const getServicios = async (req, res) => {


    try {
        const servicios = await Servicio.find(
                res.render('servicios', {
                titulo: 'Me gustan los servicios',
                parrafo: 'No me gustan las cosas',
            })
        )
    } catch (error) {
        console.log(error)
    }


}



module.exports = {
    getIndex,
    getProductos,
    getQuienesSomos,
    getContacto,
    getServicios,
}