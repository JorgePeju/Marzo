const express=require("express");

const router=express.Router();

const {getIndex,getProductos,getQuienesSomos,getContacto} = require ("../controllers/frontControllers")

// Home

router.get('/',getIndex);

router.get('/productos', getProductos);

router.get('/quienesSomos',getQuienesSomos );

router.get('/contacto',getContacto );





module.exports=router;