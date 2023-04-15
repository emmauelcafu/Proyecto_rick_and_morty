import Card from '../card/Card';
import styled from 'styled-components';   

const Div = styled.div`
display: flex;
padding: 10px;
justify-content: space-evenly;
`;


export default function Cards(props) {
   //character , onClose

   const { characters } = props;
   // console.log(props.onClose)
      
    return( 
    <Div>
      {characters.map(({id,name,species,gender,image,})=>(
         
       <Card
       id={id}
       key ={id}
       name={name}
       species={species}
       gender={gender}
       image={image}
       onClose={() => props.onClose(id)}
     />
      ))}

   </Div> );
}
   