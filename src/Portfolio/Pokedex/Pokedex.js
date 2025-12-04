import '../EstiloProyecto.css';
import { Link } from 'react-router-dom';
import botoneraLigas from './Botonera de Ligas.jpeg';
import listaDePokemon from './Lista de Pokemons.jpeg';
import datosDePokemon from './Datos de Pokemon.jpeg';
import lugaresEncuentro from './Lugares de encuentro.jpeg';

function Pokedex () {
    return (
        <div className="CuerpoPokeapi">
            <h1 className="Titulo">
                Pokédex
            </h1>
            <p className="Descripcion">
                Se trata de una app de Android para el celular hecha para los fanáticos de Pokémon. La misma cuenta con una lista
                con todos los Pokémons de todas las generaciones, dividida actualmente por las ligas. Dentro de cada uno, el usuario
                puede consultar tipos, habilidades, y hasta lugares de encuentro para aquellos que se encuentren jugando y deseen capturar
                alguno en especial. La aplicación se encuentra en desarrollo con el objetivo de agregar más cosas y mejorar la experiencia del usuario.
            </p>
            <hr className="Divider" />
            <div className="Atributos">
                <p className="NegritaTitulo">Detalles</p>
                <p><span className="Negrita">Lenguaje:</span> Kotlin</p>
                <p><span className="Negrita">Framework:</span> Jetpack Compose</p>
                <p><span className="Negrita">Arquitectura:</span> MVVM</p>
                <p><span className="Negrita">Librerías:</span> Retrofit, Room</p>
                <p><span className="Negrita">Control de versiones:</span> GitHub</p>
            </div>
            <hr className="Divider" />
            <div className="TituloMuestra">
                <span style={{fontFamily: 'Lucida Sans', fontStyle: 'italic', fontWeight: 'bold', fontSize: '25px', textDecoration: 'underline', alignSelf: 'center'}}>Imágenes de ejemplo</span>
                <div className="Muestra">
                    <img src={botoneraLigas} alt="botoneraLigas" className="Cartel" />
                    <img src={listaDePokemon} alt="listaDePokemon" className="Cartel" />
                    <img src={datosDePokemon} alt="datosDePokemon" className="Cartel" />
                    <img src={lugaresEncuentro} alt="lugaresEncuentro" className="Cartel" />
                </div>
            </div>
            <hr className="Divider" />
            <div className="Botones">
                <a style={{fontFamily: 'Arial', fontStyle: 'italic', fontWeight: 'bold', fontSize: '20px'}} href="https://github.com/ChristianGinko/ProyectoPokdex/tree/PantallaLugares">Click acá para ver el código en GitHub</a>
                <Link to={"/"}><span style={{fontFamily: 'Arial', fontStyle: 'italic', fontWeight: 'bold', fontSize: '20px'}}>Click acá para volver</span></Link>
            </div>
        </div>
    )
}

export default Pokedex;