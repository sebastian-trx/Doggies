import styles from "./styles/Home.module.css";
export function Sidebar({
  BreedFromApiOrUser,
  FilterAscDesc,
  MasMenosPesado,
  FilterByBreed,
  FilterByTemperaments,
}) {
  return (
    <div className={styles.Sidebar}>
      <div className={styles.Sidebar_1}>
        <strong>Filtar por:</strong>
        <p>{FilterByBreed}</p>
        <p>{BreedFromApiOrUser}</p>
        <strong>Ordenar por:</strong>
        <p>{FilterByTemperaments}</p>
        <p>{MasMenosPesado}</p>
        <p>{FilterAscDesc}</p>
      </div>
    </div>
  );
}
