import { Link } from "react-router-dom";

export function LandingPage(params) {
    // component module.css --> poner la imagen de fondo
    return(
        <div>
            <h1>MI PERRITO KE LO KHE XD</h1>
            <Link to= '/home'>
                <button>Entrar a Dogs-PI</button>
            </Link>
        </div>
    )
}