import './App.css'
import Card from './components/card/Card'
import Cards from './components/cards/Cards'
import SearchBar from './components/SearchBar.jsx'
import characters, { Rick } from './data.js'

function App (name,species,gender,image,onClose) {
  return (
    <div className='App' style={{ padding: '25px' }}>
       <SearchBar
          onSearch={(characterID) => window.alert(characterID)}
        />
        <hr />
      <div style={{
        display:"flex",
        justifyContent:"center",
        // alignItems:"center",
      }}>
        <Card
        key ={Rick.id}
          name={Rick.name}
          species={Rick.species}
          gender={Rick.gender}
          image={Rick.image}
          onClose={() => window.alert('Emulamos que se cierra la card')}
        />
      </div>
      <hr />
      <div>
        <Cards
          characters={characters}
        />
      </div>
      
      <div>
       
      </div>
    </div>
  )
}

export default App
