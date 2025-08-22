import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Pricing from './pages/Pricing/Pricing';
import Contact from './pages/Contact/Contact';
import Tool from './pages/Tool/Tool';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import { ThemeProvider } from './hooks/useTheme';
import './styles/globals.css';


function App() {
    return (
        <ThemeProvider>
            <Router>
                <div className="App">
                    <Header />
                    <main>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/pricing" element={<Pricing />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="/tool/:toolId" element={<Tool />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/signup" element={<Signup />} />
                        </Routes>
                    </main>
                    <Footer />
                </div>
            </Router>
        </ThemeProvider>
    );
}

export default App;