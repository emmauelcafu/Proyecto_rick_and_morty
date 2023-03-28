import Card from './Card';

export default function Cards(props) {

   const { characters } = props;
      
    return( 
    <div>
      {characters.map(({id,name,species,gender,image})=>(
         
       <Card
       key ={id}
       name={name}
       species={species}
       gender={gender}
       image={image}
       onClose={() => alert('Emulamos que se cierra la card')}
     />
      ))}

   </div> );
}
