const express = require('express');
const router = express.Router();//es para las rutas 

const {login} = require("../controllers/login")

router.get("/",login)

module.exports ={
    router
}