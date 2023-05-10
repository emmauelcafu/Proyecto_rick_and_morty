const axios = require('axios');

const DB_EMAIL = process.env.EMAIL;//esto es para guardad la url EMAIL
const DB_PASSWORD = process.env.PASSWORD;//esto es para guardad la url  PASSWORD


const STATUS_OK =200;
const STATUS_ERROR =404;

function login(req,res){
    const {password, email}= req.query
    // /login por query?password verifica los datos primeros.
    if(!password){// si no se encunetra la contraseña
        return res.status(500).json({message: "The isn't a password or email"})
    }//  si se encuentra la contraseña y el correo.
    if(password === DB_PASSWORD && email === DB_EMAIL){
        res.status(STATUS_OK).json({access: true})
}else{
        res.status(STATUS_ERROR).json({access: false})
}

}

module.exports={
    login
}