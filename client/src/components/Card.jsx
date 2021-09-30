
export function Card({name, height, weight, life_span, temperaments, image}) {
 return(
     <div>
        <h2>{name}</h2>
        <img src={image} alt="not" width="320px" height="240px"/>
        <h3>altura: {height}</h3>
        <h3>peso: {weight}</h3>
        <h3>rango de vida: {life_span}</h3>
        <h3>temperamento: {temperaments}</h3>

     </div>
 )
}