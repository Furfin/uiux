import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.js';
import Shop from './pages/Shop.js';
import Buy from './pages/Buy.js';

  

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop/:page" element={<Shop />}/>
                <Route path="/buy/:id" element={<Buy />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App