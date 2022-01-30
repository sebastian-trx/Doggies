import { Link } from "react-router-dom";
// import styles from "./styles/LandingPage.module.css";
import s from "./styles/LandingPage2.module.css";

export function LandingPage(params) {
  return (
    // <div>
    //   <img
    //     className={styles.landing}
    //     /*src="https://media.istockphoto.com/photos/collage-of-cute-baby-dogs-picture-id1126472904?k=20&m=1126472904&s=170667a&w=0&h=Zo5gA-_NgGQ3m5JjrKc5SjXiO14gFvUU6fqFmGJG1FM="*/
    //     /*src = "https://www.fondosanimales.com/Imagenes/akita-inu.jpg"*/
    //     /*src = "https://image.freepik.com/vector-gratis/fondo-patron-huesos-huellas_1374-18.jpg"
    //     alt="nf"*/
    //     src="https://image.freepik.com/foto-gratis/lindo-perrito-haciendose-pasar-persona-negocios_23-2148985938.jpg"
    //     alt="nf"
    //   />
    //   <div className={styles.text}>
    //     <h1>DOGGIES</h1>
    //     <Link to="/home">
    //       <button className = {styles.button}>Entrar</button>
    //     </Link>
    //   </div>
    // </div>
    <section className={s.landingContainer}>
      <div className={s.landingImg}></div>
      <div>
        <h1 className={s.landingTitle}>Hi friend!</h1>
        <p className={s.landingText}>Do you want to know more about us?</p>
      </div>
        <Link className={s.a} to="/home">
        <button className={s.button}>enter</button>
        </Link>
    </section>
  );
}
