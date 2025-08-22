import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from '../../../hooks/useTheme';
import Button from '../../common/Button/Button';
import MobileMenu from '../MobileMenu/MobileMenu';


const Header = () => {
    const { isDarkMode, toggleDarkMode } = useTheme();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navigate = useNavigate();

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    const handleNavigation = (path) => {
        navigate(path);
        closeMobileMenu();
    };

    return (
        <header className="bg-custom-primary border-b border-custom sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <Link
                            to="/"
                            className="text-2xl font-bold text-custom-primary cursor-pointer hover:text-blue-600 transition-colors"
                        >
                            ATEN
                        </Link>
                    </div>

                    <nav className="hidden md:flex items-center space-x-8">
                        <Link to="/about" className="text-custom-secondary hover:text-custom-primary transition-colors">
                            About
                        </Link>
                        <Link to="/projects" className="text-custom-secondary hover:text-custom-primary transition-colors">
                            Projects
                        </Link>
                        <Link to="/contact" className="text-custom-secondary hover:text-custom-primary transition-colors">
                            Contact
                        </Link>
                        <Link to="/pricing" className="text-custom-secondary hover:text-custom-primary transition-colors">
                            Pricing
                        </Link>
                    </nav>

                    <div className="flex items-center space-x-4">
                        {/* Dark Mode Toggle */}
                        <button
                            onClick={toggleDarkMode}
                            className="dark-mode-btn p-2 rounded-lg transition-colors"
                            title="Toggle dark mode"
                        >
                            <svg className={`w-5 h-5 ${isDarkMode ? 'hidden' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
                            </svg>
                            <svg className={`w-5 h-5 ${!isDarkMode ? 'hidden' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
                            </svg>
                        </button>

                        <Link to="/login" className="hidden md:block text-custom-secondary hover:text-custom-primary transition-colors">
                            Login
                        </Link>
                        <Button
                            variant="primary"
                            onClick={() => handleNavigation('/signup')}
                            className="hidden md:block"
                        >
                            Sign Up
                        </Button>

                        <button
                            onClick={toggleMobileMenu}
                            className="md:hidden p-2 rounded-md text-custom-secondary hover:text-custom-primary"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <MobileMenu
                isOpen={isMobileMenuOpen}
                onClose={closeMobileMenu}
                onNavigate={handleNavigation}
            />
        </header>
    );
};

export default Header;