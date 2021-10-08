import { Link } from "react-router-dom";
import styles from "./styles/Card.module.css";

export function Card({
  id,
  name,
  height,
  weight,
  life_span,
  temperaments,
  image,
}) {
  return (
    <div className={styles.Card}>
      <Link to={`/detail/${id}`}>
        <img
          className={styles.image}
          src={image}
          alt="not"
          width="300px"
          height="210px"
        />
      </Link>
      <h2>{name}</h2>
      <h3>altura: {height}</h3>
      <h3>peso: {weight}</h3>
      <h3>rango de vida: {life_span}</h3>
      <h3>temperamento: {temperaments}</h3>
    </div>
  );
}
