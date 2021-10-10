import styles from './styles/Home.module.css'

export function Paginado({ dogsPerPage, allDogs, paginado }) {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(allDogs / dogsPerPage); i++) {
    pageNumber.push(i);
  }

  return (
    <nav className = {styles.Paginado} >
      <ul> 
        {pageNumber &&
          pageNumber.map((el) => (
            <li key={el}>
              <button className={styles.Paginado_boton} onClick={() => paginado(el)}>{el}</button>
            </li>
          ))}
      </ul>
    </nav>
  );
}
