const mongoose = require("mongoose")

const conexion = async () => {

    const user = 'admin';
    const pass = 'admin';
    const dbname = 'proyecto1'
    const uri = `mongodb+srv://${user}:${pass}@peju.assqqwe.mongodb.net/${dbname}?retryWrites=true&w=majority`


    try {

        const respuesta = await mongoose.connect(uri)
        return respuesta


    } catch (error) {

        return {
            ok: false,
            msg: 'Error al conectar',
            error
        }
    }

}

module.exports = {
    conexion
}