
export function Paginado({dogsPerPage, allDogs, paginado}) {
    const pageNumber = []

    for(let i=1; i<=Math.ceil(allDogs/dogsPerPage); i++){
        pageNumber.push(i)
    }

    return(
        <nav>
            <ul>
                { pageNumber && 
                pageNumber.map(el =>(
                    <li key={el}>
                    <button onClick={()=> paginado(el)}>{el}</button>
                    </li>
                ))
                }
            </ul>
        </nav>
    )
}