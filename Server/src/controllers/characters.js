// import axios from "axios";
const axios = require('axios');
// import { response } from "../app";
require("dotenv").config()// para requerir lso env guardado.
const URL = process.env.API_URL;//esto es para guardad la url 
const DB_EMAIL  = process.env.EMAIL;//esto es para guardad la url EMAIL
const DB_PASSWORD  = process.env.PASSWORD;//esto es para guardad la url  PASSWORD

const STATUS_OK =200;
const STATUS_ERROR =404;

 
  function getCharaById(req,res){
    const{id}= req.params;
    try{
    axios.get(`${URL}${id}`).then(({data})=>{
        
        if(data){
          const character= {
            id: data.id,
            status: data.status,
            name: data.name,
            spacies : data.spacies,
            origin: data.origin?.name,
            image: data.image,
            gender: data.gender,
            }
        res.status(STATUS_OK).json(data);
    
          }else{
            res.status(STATUS_ERROR).json({messge:"character not found"})
              }
         });

       }catch(error){
          res.status(STATUS_ERROR).json({messge:error})
        
       }
    
   
  }

module.exports={
  getCharaById
}



    
