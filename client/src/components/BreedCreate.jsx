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

  const [errors, setErrors] = useState({});

  function handleInput(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });

    setErrors(validate({
        ...input,
    [e.target.name]: e.target.value
    }));
  }

  function validate(input){
      let errors = {}
      let comprobacion1 = /^[a-zA-Z]{0,18}$/
      let comprobacion2 = /^([0-9]{1,3})( - )([0-9]{1,3})$/
      let comprobacion3 = /^([0-9]{1,3})( - )([0-9]{1,3})$/
      
      if(!input.name){
          errors.name = 'Este campo es obligatorio'
      }else if(!(comprobacion1.test(input.name))){
        errors.name = 'El nombre solo puede llevar letras'
      }

      if(!input.height){
          errors.height = 'Este campo es obligatorio'
      }else if(!(comprobacion2.test(input.height))){
        errors.height = `Ingresar la información con el formato requerido: min - max `
      }else if(!(input.height.split(" - ")[0] > 0 &&  input.height.split(" - ")[1]<= 120)){
          errors.height = 'La altura debe estar en un rango de 1cm a 120cm !'
      }else if(!(parseInt(input.height.split(" - ")[0]) < parseInt(input.height.split(" - ")[1]))){
          errors.height = 'El valor maximo debe ser mayor al valor minimo!'
      }


      if(!input.weight){
          errors.weight = 'Este campo es obligatorio'
      }else if(!(comprobacion3.test(input.weight))){
        errors.weight = `Ingresar la información con el formato requerido: min - max `
      }else if(!(input.weight.split(" - ")[0] > 0 &&  input.weight.split(" - ")[1]<= 120)){
          errors.weight = 'El peso debe estar en un rango de 1kg a 120kg !'
      }else if(!(parseInt(input.weight.split(" - ")[0]) < parseInt(input.weight.split(" - ")[1]))){
          errors.weight = 'El valor maximo debe ser mayor al valor minimo!'
      }


      if(!input.life_span){
          errors.life_span = 'Este campo es obligatorio'
      }else if(!(comprobacion3.test(input.life_span))){
        errors.life_span = `Ingresar la información con el formato requerido: min - max `
      }else if(!(input.life_span.split(" - ")[0] > 0 &&  input.life_span.split(" - ")[1]<= 30)){
          errors.life_span = 'El rango de años de vida debe estar en 1 año a 30 años !'
      }else if(!(parseInt(input.life_span.split(" - ")[0]) < parseInt(input.life_span.split(" - ")[1]))){
          errors.life_span = 'El valor maximo debe ser mayor al valor minimo!'
      }

      
      else if (Object.entries(errors).length === 0){
        errors.boton = <button type="submit">Crear raza de perro</button>
      }
      return errors
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
        {errors.name && <p>{errors.name}</p>}
        </div>
        <br />
        <div>
          <label>Altura:</label>
          <input
            type="text"
            placeholder="min - max"
            value={input.height}
            name="height"
            onChange={handleInput}
          />
          {errors.height && <p>{errors.height}</p>}
        </div>
        <br />
        <div>
          <label>Peso:</label>
          <input
            type="text"
            placeholder="min - max"
            value={input.weight}
            name="weight"
            onChange={handleInput}
          />
          {errors.weight && <p>{errors.weight}</p>}
        </div>
        <br />
        <div>
          <label>Años de vida:</label>
          <input
            type="text"
            placeholder="min - max"
            value={input.life_span}
            name="life_span"
            onChange={handleInput}
          />
          {errors.life_span && <p>{errors.life_span}</p>}
        </div>
        <br />
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
        <br />
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
        {errors.boton}
        {/* <button type="submit">Crear raza de perro</button> */}
      </form>
    </div>
  );
}
