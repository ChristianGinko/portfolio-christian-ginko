import './Portfolio.css';
import pokeapi from './Pokeapi.jpg';
import pokedex from './Pokedex.jpeg';
import starwars from './StarWars.png';
import { Link } from 'react-router-dom';

function Portfolio () {
    return (
        <div className="Portfolio">
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
                    <h2 style={{fontFamily: 'Lucida Sans', fontStyle: 'italic', fontWeight: 'bold', textDecoration: 'underline', alignSelf: 'center'}}>Proyectos</h2>
                    <div className="CadaProyecto">
                        <Link to={"/pokeapi"}>
                            <div className="Contenedor">
                                <img src={pokeapi} alt="pokeapi" className="Imagen" />
                                <span className="Texto">Pokeapi</span>
                            </div>
                        </Link>
                        <Link to={"/pokedex"}>
                        <div className="Contenedor">
                            <img src={pokedex} alt="pokedex" className="Imagen" />
                            <span className="Texto">Pokédex</span>
                        </div>
                        </Link>
                        <Link to={"/starwars"}>
                        <div className="Contenedor">
                            <img src={starwars} alt="starwars" className="Imagen" />
                            <span className="Texto">Star Wars</span>
                        </div>
                        </Link>
                    </div>
                </div>
                <hr className="Divider" />
                <div className="Row">
                    <div className="Datos">
                        <p style={{fontFamily: 'Lucida Sans', fontWeight: 'bold', fontSize: '25px', fontStyle: 'italic', textDecoration: 'underline'}}>Habilidades técnicas</p>
                        <div className="Contacto">
                            <li><span style={{fontWeight: 'bold'}}>Lenguajes:</span> Kotlin, Java, React.js</li>
                            <li><span style={{fontWeight: 'bold'}}>Frameworks:</span> Jetpack Compose, Spring Boot</li>
                            <li><span style={{fontWeight: 'bold'}}>Arquitectura:</span> MVVM</li>
                            <li><span style={{fontWeight: 'bold'}}>Librerías:</span> Retrofit, Room, Coil</li>
                            <li><span style={{fontWeight: 'bold'}}>Control de versiones:</span> Git, GitHub</li>
                            <li><span style={{fontWeight: 'bold'}}>Pruebas:</span> Corrutinas, APIs, APIs RESTful</li>
                            <li><span style={{fontWeight: 'bold'}}>Testing:</span> Caja blanca y caja negra</li>
                        </div>
                    </div>
                    <div className="Datos">
                        <p style={{fontFamily: 'Lucida Sans', fontWeight: 'bold', fontSize: '25px', fontStyle: 'italic', textDecoration: 'underline'}}>Experiencia laboral</p>
                        <div className="Contacto">
                            <li>
                                <div className="Contacto">
                                    <span style={{fontWeight: 'bold'}}>QA Manual - uTest <span style={{fontStyle: 'italic'}}>(Septiembre 2022 - Agosto 2024)</span></span>
                                    <span>- Realización de pruebas de regresión y validación.</span>
                                    <span>- Ejecución de pruebas de sistema.</span>
                                    <span>- Diseño y documentación de casos de prueba.</span>
                                    <span>- Aplicación de metodologías de caja blanca y negra.</span>
                                </div>
                            </li>
                        </div>
                    </div>
                </div>
                <hr className="Divider" />
                <div className="DobleRow">
                    <div className="DobleDatos">
                        <p style={{fontFamily: 'Lucida Sans', fontWeight: 'bold', fontSize: '25px', fontStyle: 'italic', textDecoration: 'underline'}}>Formación académica</p>
                        <div className="DobleContacto">
                            <li>
                                <div className="Contacto">
                                    <span style={{fontWeight: 'bold'}}>Bachiller en Bienes y Servicios</span>
                                    <span style={{fontStyle: 'italic'}}>EET N°9, Lanús, Buenos Aires | Marzo 2007 - Diciembre 2012</span>
                                </div>
                            </li>
                            <li>
                                <div className="Contacto">
                                    <span style={{fontWeight: 'bold'}}>First Certificate in English</span>
                                    <span style={{fontStyle: 'italic'}}>University of Cambridge | Marzo 2013 - Octubre 2014</span>
                                </div>
                            </li>
                        </div>
                    </div>
                    <div className="DobleDatos">
                        <p style={{fontFamily: 'Lucida Sans', fontWeight: 'bold', fontSize: '25px', fontStyle: 'italic', textDecoration: 'underline'}}>Idiomas</p>
                        <div className="DobleContacto">
                            <li><span style={{fontWeight: 'bold'}}>Español: </span>Nativo</li>
                            <li><span style={{fontWeight: 'bold'}}>Inglés: </span> Intermedio</li>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;