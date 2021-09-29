
export function Card({name, height, weight, life_span, temperaments, image}) {
 return(
     <div>
        <h2>{name}</h2>
        <img src={image} alt="not" width="320px" height="240px"/>
        <h3>{height}</h3>
        <h3>{weight}</h3>
        <h3>{life_span}</h3>
        <h3>{temperaments}</h3>

     </div>
 )
}