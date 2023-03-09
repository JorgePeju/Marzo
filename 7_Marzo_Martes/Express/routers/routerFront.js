const express=require("express");

const router=express.Router();

const {getIndex,getProductos,getQuienesSomos,getContacto, getServicios} = require ("../controllers/frontControllers")

// Home

router.get('/',getIndex);

router.get('/productos', getProductos);

router.get('/quienesSomos',getQuienesSomos );

router.get('/contacto',getContacto );

router.get('/servicios',getServicios );





module.exports=router;