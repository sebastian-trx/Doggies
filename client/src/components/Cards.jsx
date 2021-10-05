import { Card } from "./Card";

export function Cards({ currentDogs }) {
  return (
    <div>
      {currentDogs &&
        currentDogs.map((el) => (
          <Card
            key={el.id}
            id={el.id}
            name={el.name}
            height={el.height}
            weight={el.weight}
            life_span={el.life_span}
            image={el.image}
            temperaments={
              el.temperaments && el.temperaments[0].hasOwnProperty("name")
                ? el.temperaments
                    .map((el) => Object.values(el))
                    .flat()
                    .map((el, indx) => <li key={indx}>{el}</li>)
                : el.temperaments &&
                  el.temperaments
                    .split(", ")
                    .map((el, indx) => <li key={indx}>{el}</li>)
            }
          />
        ))}
    </div>
  );
}
