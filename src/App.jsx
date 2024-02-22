import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from '../src/pages/Home/Home';
import Collection from '../src/pages/Collection/Collection';
import Showcase from '../src/pages/Showcase/Showcase';
import Tool from '../src/pages/Tool/Tool';
import Tutorial from '../src/pages/Tutorial/Tutorial';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Collection" element={<Collection />} />
                <Route path="/Showcase" element={<Showcase />} />
                <Route path="/Tool" element={<Tool />} />
                <Route path="/Tutorial" element={<Tutorial />} />
                <Route path="/Account/SignIn" element={<Tutorial />} />
                <Route path="/Account/SignUp" element={<Tutorial />} />
            </Routes>
        </Router>
    );
}
export default App;
