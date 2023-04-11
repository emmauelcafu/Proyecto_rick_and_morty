import styles from "./Card.module.css";
export default function Card({name,species,gender,image,onClose}) {
  
   return (
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
   );
}
