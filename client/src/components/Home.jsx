import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  filterByBreed,
  filterByTemperament,
  getDogs,
  getTemperaments,
  filterAsc_Desc,
  filterMax_Min,
  breedByUser,
} from "../actions";
import { Card } from "./Card";
import { FilterByTemperaments } from "./FilterByTemperament";
import { Paginado } from "./Paginado";
import { SearchBar } from "./SearchBar";


export function Home() {
  const dispatch = useDispatch();
  const allDogs = useSelector((state) => state.dogs);
  const allDogs1 = useSelector((state) => state.dogs1);
  const temperaments = useSelector((state) => state.temperaments);
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

  function handleFilterByBreed(e) {
    e.preventDefault();
    dispatch(filterByBreed(e.target.value));
  }

  function handleFilterAsc_Desc(e) {
    e.preventDefault();
    dispatch(filterAsc_Desc(e.target.value));
    setCurrentPage(1);
    setOrden(`Ordenado ${e.target.value}`);
  }

  function handleFilterMax_Min(e) {
    e.preventDefault();
    dispatch(filterMax_Min(e.target.value));
    setCurrentPage(1);
    setOrden(`Ordenado ${e.target.value}`);
  }

  function handleBreed(e) {
    e.preventDefault();
    console.log(e.type);
    dispatch(breedByUser(e.target.value));
  }

  return (
    <div>
      <h1>PERRITUS </h1>

      <div>
        <button
          onClick={(e) => {
            handleClick(e);
          }}
        >
          Cargar los perros de nuevo
        </button>
      </div>

      <Link to="/createbreed">
        <button>Crear Raza</button>
      </Link>

      <div>
        <select onChange={(e) => handleBreed(e)}>
          <option value="api">Razas desde la API</option>
          <option value="user">Razas creadas por el usuario</option>
        </select>
      </div>

      <div>
        <select onChange={(e) => handleFilterAsc_Desc(e)}>
          <option value="asc">Ascendente</option>
          <option value="desc">Descendente</option>
        </select>
      </div>

      <div>
        <select onChange={(e) => handleFilterMax_Min(e)}>
          <option value="mas">Mas pesado</option>
          <option value="menos">Menos pesado</option>
        </select>
      </div>

      <div>
        <select onChange={(e) => handleFilterByBreed(e)}>
          {allDogs1.map((el, indx) => (
            <option key={indx} value={el.name}>
              {el.name}
            </option>
          ))}
        </select>
      </div>

      <FilterByTemperaments/>

      <SearchBar />

      <Paginado
        dogsPerPage={dogsPerPage}
        allDogs={allDogs.length}
        paginado={paginado}
      />

      {currentDogs &&
        currentDogs.map((el) => (
          <Card
            key={el.id}
            id={el.id}
            name={el.name}
            height={el.height}
            weight={el.weight}
            life_span={el.life_span}
            image={el.image}
            temperaments={
              el.temperaments && el.temperaments[0].hasOwnProperty("name")
                ? el.temperaments
                    .map((el) => Object.values(el))
                    .flat()
                    .map((el, indx) => <li key={indx}>{el}</li>)
                : el.temperaments &&
                  el.temperaments
                    .split(", ")
                    .map((el, indx) => <li key={indx}>{el}</li>)
            }
          />
        ))}
    </div>
  );
}
