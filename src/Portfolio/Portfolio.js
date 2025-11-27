import './Portfolio.css';
import christianGinko from './Christian Ginko.jpg';

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
        </div>
    )
}

export default Portfolio;