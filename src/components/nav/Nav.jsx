import React from "react";
import SearchBar from '../search/SearchBar';
import styles from "../nav/Nav.module.css";

export default function Nav (props){
     return (   
        <div className={styles.container}>
            
          <SearchBar onSearch={(characterID) => props.onSearch(characterID)} />
          
        </div>
     )
}