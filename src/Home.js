
import './Home.css';
import christianGinko from './Christian Ginko.jpg';

function Home() {
  return (
    <div className="Home">
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
        <h2 style={{fontFamily: 'Lucida Sans', fontStyle: 'italic', fontWeight: 'bold'}}>Sobre mí</h2>
        <p style={{fontFamily: 'Arial', fontStyle: 'oblique'}}>
          Desarrollador de software con experiencia en Kotlin, Jetpack Compose, ReactJS y Java, entre otras tecnologías. Apasionado por la tecnología, disfruto participar
          activamente en proyectos, aprender de cada etapa y aportar soluciones con mis conocimientos. Busco
          seguir creciendo profesionalmente, incorporando nuevas tecnologías y compartiendo saberes en entornos
          colaborativos.
        </p>
      </div>
      <hr className="Divider" />
      <div className="Row">
        <div className="Datos">
          <p style={{fontFamily: 'Lucida Sans', fontWeight: 'bold', fontSize: '25px', fontStyle: 'italic'}}>Habilidades técnicas</p>
          <div className="Contacto">
            <li><a style={{fontWeight: 'bold'}}>Lenguajes:</a> Kotlin, Java, ReactJS</li>
            <li><a style={{fontWeight: 'bold'}}>Frameworks:</a> Jetpack Compose, Spring Boot</li>
            <li><a style={{fontWeight: 'bold'}}>Arquitectura:</a> MVVM</li>
            <li><a style={{fontWeight: 'bold'}}>Librerías:</a> Retrofit, Room, Coil</li>
            <li><a style={{fontWeight: 'bold'}}>Control de versiones:</a> Git, GitHub</li>
            <li><a style={{fontWeight: 'bold'}}>Pruebas:</a> Corrutinas, APIs, APIs RESTful</li>
            <li><a style={{fontWeight: 'bold'}}>Testing:</a> Caja blanca y caja negra</li>
          </div>
        </div>
        <div className="Datos">
          <p style={{fontFamily: 'Lucida Sans', fontWeight: 'bold', fontSize: '25px', fontStyle: 'italic'}}>Experiencia laboral</p>
          <div className="Contacto">
            <li>
              <div className="Contacto">
                <a style={{fontWeight: 'bold'}}>QA Manual - uTest <a style={{fontStyle: 'italic'}}>(Septiembre 2022 - Agosto 2024)</a></a>
                <a>- Realización de pruebas de regresión y validación.</a>
                <a>- Ejecución de pruebas de sistema.</a>
                <a>- Diseño y documentación de casos de prueba.</a>
                <a>- Aplicación de metodologías de caja blanca y negra.</a>
              </div>
            </li>
          </div>
        </div>
      </div>
      <hr className="Divider" />
      <div className="DobleRow">
        <div className="DobleDatos">
          <p style={{fontFamily: 'Lucida Sans', fontWeight: 'bold', fontSize: '25px', fontStyle: 'italic'}}>Datos de contacto</p>
          <div className="DobleContacto">
            <li><a style={{fontWeight: 'bold'}}>Teléfono:</a> +54 9 1151560006</li>
            <li><a style={{fontWeight: 'bold'}}>Email:</a> christianginko@gmail.com</li>
            <li><a style={{fontWeight: 'bold'}}>Instagram:</a> <a href="https://www.instagram.com/christianginko/">christianginko</a></li>
            <li><a style={{fontWeight: 'bold'}}>Twitter:</a> <a href="https://x.com/CGinko">CGinko</a></li>
            <li><a style={{fontWeight: 'bold'}}>Linkedin:</a> <a href="https://www.linkedin.com/in/christian-ariel-ginko/">Christian Ariel Ginko</a></li>
            <li><a style={{fontWeight: 'bold'}}>GitHub:</a> <a href="https://github.com/ChristianGinko">ChristianGinko</a></li>
          </div>
        </div>
        <div className="DobleDatos">
          <p style={{fontFamily: 'Lucida Sans', fontWeight: 'bold', fontSize: '25px', fontStyle: 'italic'}}>Proyectos</p>
          <div className="DobleContacto">
            <li><a style={{fontWeight: 'bold'}} href="https://github.com/ChristianGinko/Pokedex/tree/repositorio">PokeApi</a></li>
            <li><a style={{fontWeight: 'bold'}} href="https://github.com/ChristianGinko/ProyectoPokdex/tree/PantallaLugares">Pokédex</a></li>
            <li><a style={{fontWeight: 'bold'}} href="https://github.com/ChristianGinko/MiPrimeraApp/tree/object/app">Datos Star Wars (Prueba)</a></li>
          </div>
        </div>
      </div>
      <hr className="Divider" />
      <div className="TripleRow">
        <div className="TripleDatos">
          <p style={{fontFamily: 'Lucida Sans', fontWeight: 'bold', fontSize: '25px', fontStyle: 'italic'}}>Formación académica</p>
          <div className="TripleContacto">
            <li>
              <div className="Contacto">
                <a style={{fontWeight: 'bold'}}>Bachiller en Bienes y Servicios</a>
                <a style={{fontStyle: 'italic'}}>EET N°9, Lanús, Buenos Aires | Marzo 2007 - Diciembre 2012</a>
              </div>
            </li>
            <li>
              <div className="Contacto">
                <a style={{fontWeight: 'bold'}}>First Certificate in English</a>
                <a style={{fontStyle: 'italic'}}>University of Cambridge | Marzo 2013 - Octubre 2014</a>
              </div>
            </li>
          </div>
        </div>
        <div className="TripleDatos">
          <p style={{fontFamily: 'Lucida Sans', fontWeight: 'bold', fontSize: '25px', fontStyle: 'italic'}}>Idiomas</p>
          <div className="TripleContacto">
            <li><a style={{fontWeight: 'bold'}}>Español: </a>Nativo</li>
            <li><a style={{fontWeight: 'bold'}}>Inglés: </a> Intermedio</li>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
