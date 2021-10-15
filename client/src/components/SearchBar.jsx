import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchBar } from "../actions";
import styles from './styles/SearchBar.module.css'

export function SearchBar({setCurrentPage, setOrden}) {
  const dispatch = useDispatch();
  const [raza, setRaza] = useState("");

  function handleInput(e) {
    e.preventDefault();
    setRaza(e.target.value);
  }

  function handleSearch(e) {
    e.preventDefault();
    dispatch(searchBar(raza));
    setCurrentPage(1);
        setOrden(`Ordenado ${e.target.value}`);
  }

  return (
    <div>
      <input
        className = {styles.input}
        type="text"
        placeholder="buscar raza"
        onChange={(e) => handleInput(e)}
      />
      <button className={styles.button} type="submit" onClick={(e) => handleSearch(e)}>
        Buscar
      </button>
    </div>
  );
}
