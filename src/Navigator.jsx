import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Portfolio from './Portfolio/Portfolio.js';
import christianGinko from './Portfolio/Christian Ginko.jpg';
import './Portfolio/Portfolio.css';

function Navigator() {
    return (
        <BrowserRouter basename="/portfolio-christian-ginko">
            <div className="Presentacion">
                <div className="Horizontal">
                    <img src={christianGinko} className="FotoPerfil" alt="christianGinko" />
                    <div className="Vertical">
                        <h1 className="Nombre">Christian Ginko</h1>
                        <h2 className="Profesion">Software Developer</h2>
                    </div>
                </div>
            </div>
            <Routes>
                <Route path="/" element={<Portfolio />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Navigator;