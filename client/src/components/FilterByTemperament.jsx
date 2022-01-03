import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterByTemperament,getTemperaments } from "../actions";



export function FilterByTemperaments({setCurrentPage, setOrden}) {
    const dispatch = useDispatch()
    const temperaments = useSelector((state) => state.temperaments);

    useEffect(() => {
        dispatch(getTemperaments());
      }, []);

    function handleFilterByTemperament(e) {
        e.preventDefault();
        dispatch(filterByTemperament(e.target.value));
        setCurrentPage(1);
        setOrden(`Ordenado ${e.target.value}`);
    }

    return(
        <div>
        <select onChange={(e) => handleFilterByTemperament(e)}>
        <option value = "Temperamento" > Temperamento </option>
          {temperaments.map((el, indx) => (
            <option key={indx} value={el.name}>
              {el.name}
            </option>
          ))}
        </select>
      </div>
    )
}