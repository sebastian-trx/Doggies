import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { filterByBreed, filterByTemperament, getDogs, getTemperaments } from "../actions";
import { Card } from "./Card";
import { Paginado } from "./Paginado";

export function Home() {
    const dispatch = useDispatch()
    const allDogs = useSelector((state) => state.dogs)
    const temperaments = useSelector((state) => state.temperaments)
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
        dispatch(getTemperaments())
    },[])

    function handleClick(e) {
        e.preventDefault()
        dispatch(getDogs())
    }

    function handleFilterByBreed(e) {
        e.preventDefault()
        dispatch(filterByBreed(e.target.value))
    }

    function handleFilterByTemperament(e) {
        e.preventDefault()
        dispatch(filterByTemperament(e.target.value))
    }

    return(
        <div>
            <h1>PERRITUS </h1>

            <Link to='/crearRaza'>
                <button>Crear Raza</button>
            </Link>

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

            <div>
                <select onChange = {e => handleFilterByBreed(e)}>
                    { 
                        allDogs.map((el, indx) => (
                            <option key={indx} value= {el.name}>{el.name}</option>        
                        ))
                    }
                </select>
            </div>

            <div>
                <select onChange = {e => handleFilterByTemperament(e)}>
                    { 
                        temperaments.map((el, indx) => (
                            <option key={indx} value= {el.name}>{el.name}</option>        
                        ))
                    }
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