import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Portfolio from './Portfolio/Portfolio.js';
import christianGinko from './Portfolio/Christian Ginko.jpg';
import './Portfolio/Portfolio.css';
import Pokeapi from './Portfolio/Pokeapi/Pokeapi.js';
import Pokedex from './Portfolio/Pokedex/Pokedex.js';
import StarWars from './Portfolio/StarWars/StarWars.js';
import email from './Portfolio/Email logo.png';
import instagram from './Portfolio/Instagram logo.png';
import github from './Portfolio/GitHub logo.png';
import linkedin from './Portfolio/Linkedin logo.png';
import x from './Portfolio/X logo.png';

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
                <Route path="/pokeapi" element={<Pokeapi />} />
                <Route path="/pokedex" element={<Pokedex />} />
                <Route path="/starwars" element={<StarWars />} />
            </Routes>
            <div className="DatosContacto">
                <li className="item">
                    <img src={email} className="icon" alt="email" />
                    <span className="label">Email:</span>{" "}christianginko@gmail.com
                </li>
                <li className="item">
                    <img src={instagram} className="icon" alt="instagram" />
                    <span className="label">Instagram:</span>{" "}<a className="LinkCustom" href="https://www.instagram.com/christianginko/">christianginko</a>
                </li>
                <li className="item">
                    <img src={x} className="icon" alt="x" />
                    <span className="label">Twitter:</span>{" "}<a className="LinkCustom" href="https://x.com/CGinko">CGinko</a>
                </li>
                <li className="item">
                    <img src={linkedin} className="icon" alt="linkedin" />
                    <span className="label">Linkedin:</span>{" "}<a className="LinkCustom" href="https://www.linkedin.com/in/christian-ariel-ginko/">Christian Ariel Ginko</a>
                </li>
                <li className="item">
                    <img src={github} className="icon" alt="github" />
                    <span className="label">GitHub:</span>{" "}<a className="LinkCustom" href="https://github.com/ChristianGinko">ChristianGinko</a>
                </li>
            </div>
        </BrowserRouter>
    )
}

export default Navigator;