import { useDispatch } from "react-redux";
import { filterAsc_Desc } from "../actions";

export function FilterAscDesc({setCurrentPage, setOrden}) {
    const dispatch = useDispatch()

    function handleFilterAsc_Desc(e) {
        e.preventDefault();
        dispatch(filterAsc_Desc(e.target.value));
        setCurrentPage(1);
        setOrden(`Ordenado ${e.target.value}`);
      }
  return (
    <div>
        <select onChange={(e) => handleFilterAsc_Desc(e)}>
          <option> ASC / DESC </option>
          <option value="asc">Ascendente A - Z</option>
          <option value="desc">Descendente Z - A</option>
        </select>
      </div>
  );
}