import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home/index';
import Collection from './pages/Collection/Collection';
import Showcase from './pages/Showcase/Showcase';
import Tool from './pages/Tool/Tool';
import Tutorial from './pages/Tutorial/Tutorial';
import SignIn from './pages/Auth/SignIn';
import SignUp from './pages/Auth/SignUp';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Collection" element={<Collection />} />
                <Route path="/Showcase" element={<Showcase />} />
                <Route path="/Tool" element={<Tool />} />
                <Route path="/Tutorial" element={<Tutorial />} />
                <Route path="/Account/SignIn" element={<SignIn />} />
                <Route path="/Account/SignUp" element={<SignUp />} />
            </Routes>
        </Router>
    );
}
export default App;
