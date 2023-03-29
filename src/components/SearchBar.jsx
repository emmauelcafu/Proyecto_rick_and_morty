import styles from "./SearchBar.module.css";


export default function SearchBar(props) {
   console.log(props)
   return (
      <div className={styles.search}>
          <input type='search' />
       <button onClick={()=>props.onSearch('recibe un id')}>Agregar</button> 
      </div>
   );
}
