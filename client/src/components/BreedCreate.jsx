import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTemperaments, createBreed } from "../actions";

export function BreedCreate() {
  const dispatch = useDispatch();
  const temperaments = useSelector((state) => state.temperaments);

  const [input, setInput] = useState({
    name: "",
    height: "",
    weight: "",
    life_span: "",
    image: "",
    temperament: [],
  });

  function handleInput(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  function handleSelect(e) {
    setInput({
      ...input,
      temperament: [...input.temperament, e.target.value],
    });
  }

  function handleClick(e, el) {
    e.preventDefault();
    setInput({
      ...input,
      temperament: [...input.temperament.filter((e) => e !== el)],
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(input);
    dispatch(createBreed(input));
    alert("Raza creada");
  }

  useEffect(() => {
    dispatch(getTemperaments());
  }, []);

  return (
    <div>
      <Link to="/home">
        <button>Ir a pagina principal</button>
      </Link>
      <h1>crea tu raza de perro</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            value={input.name}
            name="name"
            onChange={handleInput}
          />
        </div>
        <div>
          <label>Altura:</label>
          <input
            type="text"
            placeholder="min - max"
            value={input.height}
            name="height"
            onChange={handleInput}
          />
        </div>
        <div>
          <label>Peso:</label>
          <input
            type="text"
            placeholder="min - max"
            value={input.weight}
            name="weight"
            onChange={handleInput}
          />
        </div>
        <div>
          <label>Años de vida:</label>
          <input
            type="text"
            placeholder="min - max"
            value={input.life_span}
            name="life_span"
            onChange={handleInput}
          />
        </div>
        <div>
          <label>Imagen:</label>
          <input
            type="text"
            placeholder="url de la imagen "
            value={input.image}
            name="image"
            onChange={handleInput}
          />
        </div>
        <div>
          <label>Temperamentos: </label>
          <select onChange={handleSelect}>
            {temperaments.map((el) => (
              <option value={el.name}>{el.name}</option>
            ))}
          </select>
          <ul>
            {input.temperament &&
              [...new Set(input.temperament)].map((el) => (
                <li>
                  {el}
                  <button
                    type="button"
                    onClick={(e) => {
                      handleClick(e, el);
                    }}
                  >
                    x
                  </button>
                </li>
              ))}
          </ul>
        </div>
        <button type="submit">Crear raza de perro</button>
      </form>
    </div>
  );
}
