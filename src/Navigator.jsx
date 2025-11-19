import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Portfolio from './Portfolio/Portfolio.js';

function Navigator() {
    return (
        <BrowserRouter basename="/portfolio-christian-ginko">
            <Routes>
                <Route path="/" element={<Portfolio />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Navigator;