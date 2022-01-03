import { useSelector, useDispatch } from "react-redux";
import { filterByBreed } from "../actions";


export function FilterByBreed({setCurrentPage, setOrden}) {
    const allDogs1 = useSelector((state) => state.dogs1);
    const dispatch = useDispatch()
    
    function handleFilterByBreed(e) {
        e.preventDefault();
        dispatch(filterByBreed(e.target.value));
        setCurrentPage(1);
        setOrden(`Ordenado ${e.target.value}`);
      }

    return(
        <div>
        <select onChange={(e) => handleFilterByBreed(e)}>
        <option value = "Raza" > Raza </option>
          {allDogs1.map((el, indx) => (
            <option key={indx} value={el.name}>
              {el.name}
            </option>
          ))}
        </select>
      </div>
    )
    
}