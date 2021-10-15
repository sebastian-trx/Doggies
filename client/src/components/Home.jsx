import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDogs, getTemperaments } from "../actions";
import { BreedFromApiOrUser } from "./BreedFromApiOrUser";
import { Cards } from "./Cards";
import { FilterAscDesc } from "./FilterAscDesc";
import { FilterByBreed } from "./FilterByBreed";
import { FilterByTemperaments } from "./FilterByTemperament";
import { MasMenosPesado } from "./MasMenosPesado";
import { Navbar } from "./Navbar";
import { Paginado } from "./Paginado";
import { SearchBar } from "./SearchBar";
import { Sidebar } from "./Sidebar";
import styles from "./styles/Home.module.css";

export function Home() {
  const dispatch = useDispatch();
  const allDogs = useSelector((state) => state.dogs);
  const [orden, setOrden] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [dogsPerPage, setDogsPerPage] = useState(8);
  const indexofLastDog = currentPage * dogsPerPage;
  const indexOfFirstDog = indexofLastDog - dogsPerPage;
  const currentDogs = allDogs.slice(indexOfFirstDog, indexofLastDog);

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getDogs());
    dispatch(getTemperaments());
  }, []);

  function handleClick(e) {
    e.preventDefault();
    dispatch(getDogs());
  }

  return (
    <div className={styles.gridContainer}>
      <Navbar
        BreedFromApiOrUser={<BreedFromApiOrUser />}
        FilterAscDesc={
          <FilterAscDesc setCurrentPage={setCurrentPage} setOrden={setOrden} />
        }
        MasMenosPesado={
          <MasMenosPesado setCurrentPage={setCurrentPage} setOrden={setOrden} />
        }
        FilterByBreed={<FilterByBreed />}
        FilterByTemperaments={<FilterByTemperaments />}
        SearchBar={<SearchBar setCurrentPage={setCurrentPage} setOrden={setOrden}/>}
      />

      <Paginado
        dogsPerPage={dogsPerPage}
        allDogs={allDogs.length}
        paginado={paginado}
      />

      <Sidebar
        BreedFromApiOrUser={<BreedFromApiOrUser />}
        FilterAscDesc={
          <FilterAscDesc setCurrentPage={setCurrentPage} setOrden={setOrden} />
        }
        MasMenosPesado={
          <MasMenosPesado setCurrentPage={setCurrentPage} setOrden={setOrden} />
        }
        FilterByBreed={<FilterByBreed />}
        FilterByTemperaments={<FilterByTemperaments />}
      />
      <Cards currentDogs={currentDogs} />
    </div>
  );
}
