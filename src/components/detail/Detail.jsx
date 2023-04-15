import React from "react";
import { useParams,  } from "react-router-dom";
import { useState,useEffect } from "react";
import styles from "./Detail.module.css"

export default function Deatil (props){
    // se importa useState y se crea el estado local con el nombre "character" inicial //vacio.
    const {detailId}= useParams()
    const [character,setCharacter]= useState({});
    
    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
        .then((res)=>res.json())
        .then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        // .catch((err)=>{
        //     alert("Ups! Algo estuvo mal")
        // })
        return setCharacter({});
     }, []);
    return(
        // se renderisa los nombres de los personajes
        <div className={styles.container}>

            <h1>Name: {character.name}</h1>
            <h1>Status: {character.status}</h1>
            

        </div>
    )
}