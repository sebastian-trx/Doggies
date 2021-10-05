import { useDispatch } from "react-redux";
import { breedByUser } from "../actions";

export function BreedFromApiOrUser(params) {
    const dispatch = useDispatch()

    function handleBreed(e) {
        e.preventDefault();
        dispatch(breedByUser(e.target.value));
      }
    return(
        <div>
        <select onChange={(e) => handleBreed(e)}>
          <option value="api">Razas desde la API</option>
          <option value="user">Razas creadas por el usuario</option>
        </select>
      </div>
    )
}