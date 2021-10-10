import styles from "./styles/Home.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getDogs } from "../actions";

export function Navbar({
  BreedFromApiOrUser,
  FilterAscDesc,
  MasMenosPesado,
  FilterByBreed,
  FilterByTemperaments,
  SearchBar,
}) {
  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault();
    dispatch(getDogs());
  }
  return (
    <div className={styles.Navbar}>
      <div className={styles.Navbar_1}>
      <p> <button
            onClick={(e) => {
              handleClick(e);
            }}
          >
            Todas las razas
          </button></p>
      <p>{SearchBar}</p>
      <p>{
            <Link to="/createbreed">
              <button>Crear Raza</button>
            </Link>
          }</p>
      </div>
    </div>
  );
}
