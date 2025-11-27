import './Portfolio.css';
import { Link } from "react-router-dom";
import christianGinko from './Christian Ginko.jpg';
import pokeapi from './Pokeapi.jpg';
import pokedex from './Pokedex.jpeg';
import starwars from './StarWars.png';

function Portfolio () {
    return (
        <div className="Portfolio">
            <div className="Presentacion">
                <div className="Horizontal">
                    <img src={christianGinko} className="FotoPerfil" alt="christianGinko" />
                    <div className="Vertical">
                        <h1 className="Nombre">Christian Ginko</h1>
                        <h2 className="Profesion">Software Developer</h2>
                    </div>
                </div>
            </div>
            <div className="Cuerpo">
                <h2 style={{fontFamily: 'Lucida Sans', fontStyle: 'italic', fontWeight: 'bold', textDecoration: 'underline'}}>Sobre mí</h2>
                <p style={{fontFamily: 'Arial', fontStyle: 'oblique'}}>
                    Desarrollador de software con experiencia en Kotlin, React.js y Java, entre otras tecnologías. Apasionado por la tecnología, disfruto participar
                    activamente en proyectos, aprender de cada etapa y aportar soluciones con mis conocimientos. Busco
                    seguir creciendo profesionalmente, incorporando nuevas tecnologías y compartiendo saberes en entornos
                    colaborativos.
                </p>
            </div>
            <hr className="Divider" />
            <div className="Data">
                <div className="Proyectos">
                    <h3 style={{alignSelf: 'center'}}>Proyectos</h3>
                    <div className="CadaProyecto">
                        <Link to="/pokeapi"><div className="Contenedor">
                            <img src={pokeapi} alt="pokeapi" className="Imagen" />
                            <span className="Texto">Pokeapi</span>
                        </div></Link>
                        <Link to="/pokedex"><div className="Contenedor">
                            <img src={pokedex} alt="pokedex" className="Imagen" />
                            <span className="Texto">Pokédex</span>
                        </div></Link>
                        <Link to="/starwars"><div className="Contenedor">
                            <img src={starwars} alt="starwars" className="Imagen" />
                            <span className="Texto">Star Wars</span>
                        </div></Link>
                    </div>
                </div>
                <hr className="Divider" />
                
            </div>
        </div>
    )
}

export default Portfolio;