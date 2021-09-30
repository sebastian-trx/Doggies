import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getDogs } from "../actions";
import { Card } from "./Card";
import { Paginado } from "./Paginado";

export function Home() {
    const dispatch = useDispatch()
    const allDogs = useSelector((state) => state.dogs)
    const [currentPage, setCurrentPage] = useState(1)
    const [dogsPerPage, setDogsPerPage] = useState(8)
    const indexofLastDog = currentPage * dogsPerPage
    const indexOfFirstDog = indexofLastDog - dogsPerPage
    const currentDogs = allDogs.slice(indexOfFirstDog, indexofLastDog)


    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    useEffect (()=> {
        dispatch(getDogs())
    },[])

    function handleClick(e) {
        e.preventDefault()
        dispatch(getDogs())
    }

    return(
        <div>
            <Link to='/crearRaza'>
                <button>Crear Raza</button>
            </Link>
            <h1>PERRITUS </h1>
            <div>
                <button onClick={e => {handleClick(e)}}>
                    Cargar los perros de nuevo
                </button>
            </div>
            <div>
                <select>
                    <option value="asc">Ascendente</option>
                    <option value="desc">Descendente</option>
                </select>
            </div>

            <Paginado 
            dogsPerPage= {dogsPerPage} 
            allDogs={allDogs.length} 
            paginado={paginado}
            />

            {
                currentDogs && currentDogs.map(el=>(
                    <Card 
                    key={el.id} 
                    name={el.name} 
                    height={el.height} 
                    weight={el.weight} 
                    life_span={el.life_span} 
                    image={el.image}
                    temperaments={
                        el.temperaments && 
                        el.temperaments[0].hasOwnProperty("name") ? 
                        el.temperaments.map(el=>Object.values(el)).flat().map((el,indx) => 
                        <li key={indx}>{el}</li>) 
                        : 
                        el.temperaments && 
                        el.temperaments.split(', ').map((el,indx) => <li key={indx}>{el}</li>)
                        } 
                    />
                ))
            }
        </div>
    )
}