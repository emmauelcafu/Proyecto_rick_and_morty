import React from "react";
import SearchBar from '../search/SearchBar';
import styles from "../nav/Nav.module.css";
import {NavLink} from "react-router-dom";
  // const NavLinkme=({
  //   to,children, ...props
  // })=>{
  //   return(
  //     <NavLink {...props} to={to} className={({isActive})=>(isActive? styles.active:styles.disable)}>
  //     </NavLink>
  //   )
  // }

export default function Nav (props){
     return (   
        <div className={styles.container}>
            <NavLink className={styles.nav} to="/Home">Home</NavLink>
            <NavLink className={styles.nav} to="/about">About</NavLink>
            {/* quedamos aqui https://www.students.soyhenry.com/classes/17?cohortId=65&videoOrdinal=3   20:22 */}
            
          <SearchBar onSearch={(characterID) => props.onSearch(characterID)} />
         
        </div>
     )
}