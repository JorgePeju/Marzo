const {Schema, model} = require('mongoose');

const ServicioSchema = new Schema ({

    servicio:String,
    descripcion:{

       type:String,
       require:true,
       trim:true 

    },
    fecha: {
        type:Date,
        default:Date.now
    }
})

module.exports=model('Servicio', ServicioSchema)