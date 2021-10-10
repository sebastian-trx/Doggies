import styles from './styles/Home.module.css'
export function Sidebar({
    BreedFromApiOrUser,
    FilterAscDesc,
    MasMenosPesado,
    FilterByBreed,
    FilterByTemperaments,
  }) {
    return(
        <div className={styles.Sidebar}>
            filtar por:
            <div className = {styles.Sidebar_1}>
            <p>{FilterByBreed}</p>
            <p>{BreedFromApiOrUser}</p>
            <p>{FilterByTemperaments}</p>
            <p>{MasMenosPesado}</p>
            <p>{FilterAscDesc}</p>
            </div>
        </div>
    )
}