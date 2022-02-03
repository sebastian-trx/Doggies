import { Link } from "react-router-dom";
import s from "./styles/LandingPage2.module.css";

export function LandingPage() {
  return (
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
