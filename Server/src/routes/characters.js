const express = require('express');
const router = express.Router();//es para las rutas 

const {getCharaById} = require("../controllers/characters")

router.get("/:id",getCharaById)



module.exports ={
    router
}