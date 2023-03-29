import Card from '../card/Card';
import styled from 'styled-components';   

const Div = styled.div`
display: flex;
padding: 10px;
justify-content: space-evenly;
`;


export default function Cards(props) {

   const { characters } = props;
      
    return( 
    <Div>
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

   </Div> );
}
   