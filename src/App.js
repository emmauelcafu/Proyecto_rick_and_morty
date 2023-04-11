import { useState } from 'react'
import './App.css'
import Cards from './components/cards/Cards'
import  Nav from './components/nav/Nav'
import styled from 'styled-components';

function App (name,species,gender,image) {
    const [characters,setCharacters] = useState([]);
  //   const example = {
  //     name: 'Morty Smith',
  //     species: 'Human',
  //     gender: 'Male',
  //     image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
  //  };
  //se conecta la api de "reckandmorty".
    const onSearch = (id)=>{
      fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res)=>res.json())
      .then((data)=>{
        //data trae objes 
        // setCharacters([...characters,data])
        data.name ? setCharacters([...characters,data]):
        //error para por si no encontramos personages.
        alert("No encontrado")//estamso por ahi 38:32
      })
      .catch((error)=>console.log(error))
    }
    const onClose = (id)=>{
      const filtered = characters.filter((char)=>char.id !== Number(id))
      setCharacters(filtered)
    }
  return (
    <div className='App' style={{ padding: '25px' }}>
        {/* aqui va el nav */}
        <Nav onSearch={onSearch}/> 
         <hr />
        <Cards characters={characters} onClose={onClose}/>
    </div>
  )
}

export default App
