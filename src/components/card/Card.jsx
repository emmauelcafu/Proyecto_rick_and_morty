import styles from "./Card.module.css";
import { Link } from "react-router-dom";
export default function Card({id,name,species,gender,image,onClose}) {
  
   return (
      // el link "to" es para enrutar el id del componente ..
         <Link to={`/detail/${id}`} className={styles.link}>

      <div className={styles.container}>
         <div className={styles.buttonContainder}>
           <button className={styles.button} onClick ={onClose}> X
           </button>
         </div>
         <div className={styles.imagenContainder}>
         <img  src={image} alt="Not found" />
         <h2 className={styles.name} >{name}</h2>
         </div>
         <div className={styles.propsContainer}>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         </div>
        </div>
      </Link>
   );
}
