import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { detail } from "../actions";
import { useEffect } from "react";

export function Detail(props) {
  const dispatch = useDispatch();
  const id = props.match.params.id;
  useEffect(() => {
    dispatch(detail(id));
  }, []);

  const dog = useSelector((state) => state.detail);
  //console.log(dog[0].name, id)
  return (
    <div>
      {dog.length > 0 ? (
        <div>
          <h1>{dog[0].name}</h1>
          <img src={dog[0].image} alt="notfound" />
          <h2>
            Temperamento:{" "}
            {dog[0].temperaments[0].hasOwnProperty("name")
              ? dog[0].temperaments
                  .map((el) => Object.values(el))
                  .flat()
                  .map((el, indx) => <li key={indx}>{el}</li>)
              : dog[0].temperaments
                  .split(", ")
                  .map((el, indx) => <li key={indx}>{el}</li>)}
          </h2>
          <h3>Altura: {dog[0].height}</h3>
          <h3>Peso: {dog[0].weight}</h3>
          <h3>Años de vida: {dog[0].life_span}</h3>
        </div>
      ) : (
        <div>
          <p>cargando...</p>
        </div>
      )}
    </div>
  );
}
