import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home.js';

function Navigator() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Navigator;