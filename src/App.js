import { useState } from 'react'
import './App.css'
import Cards from './components/cards/Cards'
import  Nav from './components/nav/Nav'

function App (name,species,gender,image,onClose) {
    const [characters,setCharacters] = useState([]);
    const example = {
      name: 'Morty Smith',
      species: 'Human',
      gender: 'Male',
      image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
   };
    const onSearch = (id)=>{
      setCharacters([...characters,example]);
    }
  return (
    <div className='App' style={{ padding: '25px' }}>
        {/* aqui va el nav */}
        <Nav onSearch={onSearch}/> {/*quedamos en el 18:26  https://www.students.soyhenry.com/classes/16?cohortId=65&videoOrdinal=3*/}
         <hr />
        <Cards characters={characters}/>
    </div>
  )
}

export default App
