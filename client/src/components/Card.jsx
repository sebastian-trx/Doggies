
export function Card({name, height, weight, life_span, temperament, image}) {
 return(
     <div>
        <h2>{name}</h2>
        <img src={image} alt="not" width="320px" height="240px"/>
        <h3>{height}</h3>
        <h4>{weight}</h4>
        <h5>{life_span}</h5>
     </div>
 )
}