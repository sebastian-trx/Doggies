import { useDispatch } from "react-redux";
import { filterMax_Min } from "../actions";

export function MasMenosPesado({setCurrentPage, setOrden}) {
    const dispatch = useDispatch()

    function handleFilterMax_Min(e) {
        e.preventDefault();
        dispatch(filterMax_Min(e.target.value));
        setCurrentPage(1);
        setOrden(`Ordenado ${e.target.value}`);
      }
  return (
    <div>
      <select onChange={(e) => handleFilterMax_Min(e)}>
        <option value="mas">Mas pesado</option>
        <option value="menos">Menos pesado</option>
      </select>
    </div>
  );
}
