import styles from "./styles/Navbar.module.css";
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
      <ul>
        <li>{BreedFromApiOrUser}</li>
        <li>{FilterAscDesc}</li>
        <li>{MasMenosPesado}</li>
        <li>{FilterByBreed}</li>
        <li>{FilterByTemperaments}</li>
        <li>{SearchBar}</li>
        <li>
          {
            <Link to="/createbreed">
              <button>Crear Raza</button>
            </Link>
          }
        </li>
        <li>
          <button
            onClick={(e) => {
              handleClick(e);
            }}
          >
            Todas las razas
          </button>
        </li>
        {/* <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
        <li>10</li> */}
      </ul>
    </div>
  );
}
