import '../EstiloProyecto.css';
import { Link } from 'react-router-dom';
import splashStarWars from './Splash Screen Star Wars.jpeg';
import listaStarWars from './Lista Peliculas Star Wars.jpeg';

function StarWars () {
    return (
        <div className="CuerpoPokeapi">
            <h1 className="Titulo">
                Star Wars
            </h1>
            <p className="Descripcion">
                Mi primera app de Android publicada en GitHub. Se trata simplemente de una lista de las primeras
                seis películas de Star Wars con nombre, número, argumento y hasta director. Se consumió una API mediante
                un parseador hecho de forma manual, antes de aprender a utilizar Retrofit.
            </p>
            <hr className="Divider" />
            <div className="Muestra">
                <img src={splashStarWars} alt="splashStarWars" className="Cartel" />
                <img src={listaStarWars} alt="listaStarWars" className="Cartel" />
            </div>
            <hr className="Divider" />
            <div className="Botones">
                <a style={{fontFamily: 'Arial', fontStyle: 'italic', fontWeight: 'bold', fontSize: '20px'}} href="https://github.com/ChristianGinko/MiPrimeraApp/tree/object">Click acá para ver el código en GitHub</a>
                <Link to={"/"}><span style={{fontFamily: 'Arial', fontStyle: 'italic', fontWeight: 'bold', fontSize: '20px'}}>Click acá para volver</span></Link>
            </div>
        </div>
    )
}

export default StarWars;