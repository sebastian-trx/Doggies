import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
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
    <div>
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
        SearchBar={<SearchBar />}
      />
      {/* <h1>PERRITUS </h1> */}

      {/* <div>
        <button
          onClick={(e) => {
            handleClick(e);
          }}
        >
          Todas las razas
        </button>
      </div>

      <Link to="/createbreed">
        <button>Crear Raza</button>
      </Link> */}

      {/* <BreedFromApiOrUser /> */}

      {/* <FilterAscDesc setCurrentPage={setCurrentPage} setOrden={setOrden} /> */}

      {/* <MasMenosPesado setCurrentPage={setCurrentPage} setOrden={setOrden} /> */}

      {/* <FilterByBreed /> */}

      {/* <FilterByTemperaments /> */}

      {/* <SearchBar /> */}

      <Paginado
        dogsPerPage={dogsPerPage}
        allDogs={allDogs.length}
        paginado={paginado}
      />

      <Cards currentDogs={currentDogs} />
    </div>
  );
}
