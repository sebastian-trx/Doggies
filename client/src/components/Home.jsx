import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getDogs } from "../actions";
import { Card } from "./Card";

export function Home() {
    const dispatch = useDispatch()
    const allDogs = useSelector((state) => state.dogs)

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
            {
                allDogs && allDogs.map(el=>(
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