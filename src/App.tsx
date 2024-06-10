import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CustomNavbar from './components/CustomNavbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';

const App: React.FC = () => {
    return (
        <Router>
            <CustomNavbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/projects/:id" element={<ProjectDetail />} />
            </Routes>
        </Router>
    );
};

export default App;
