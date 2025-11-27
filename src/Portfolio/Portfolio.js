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
        </div>
    )
}

export default Portfolio;