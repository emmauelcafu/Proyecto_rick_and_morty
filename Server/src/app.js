const express = require('express');
const app = express();
const logger = require ("morgan")

const router = require("./routes/index")

app.use(express.json())

//es para form --> data
const urlencoded = express.urlencoded({extended:false})
app.use((req,res,next)=>{
     // Permitir el acceso a los recursos desde cualquier origen
    res.header("Access-Control-Allow-Origin","*");
     // Permitir el uso de credenciales de autenticación en las solicitudes
    res.header("Access-Control-Allow-Creadentials",true);
    // Especificar qué encabezados personalizados se permiten en las solicitudes
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   // Especificar qué métodos HTTP se permiten en las solicitudes
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    // Llamar al siguiente middleware en la cadena de middleware
    next();
});

app.use(logger("dev "));

app.use("/rickandmorty", router);

module.exports= app;