import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterByTemperament,getTemperaments } from "../actions";



export function FilterByTemperaments() {
    const dispatch = useDispatch()
    const temperaments = useSelector((state) => state.temperaments);

    useEffect(() => {
        dispatch(getTemperaments());
      }, []);

    function handleFilterByTemperament(e) {
        e.preventDefault();
        dispatch(filterByTemperament(e.target.value));
    }

    return(
        <div>
        <select onChange={(e) => handleFilterByTemperament(e)}>
          {temperaments.map((el, indx) => (
            <option key={indx} value={el.name}>
              {el.name}
            </option>
          ))}
        </select>
      </div>
    )
}