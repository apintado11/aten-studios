import React from 'react';
import { useTheme } from '../../../hooks/useTheme';
import Button from '../../common/Button';


const MobileMenu = ({ isOpen, onClose, onNavigate }) => {
    const { isDarkMode, toggleDarkMode } = useTheme();

    const handleNavigation = (path) => {
        onNavigate(path);
    };

    return (
        <div className={`mobile-menu fixed top-0 left-0 w-full h-full z-40 md:hidden ${isOpen ? 'open' : ''}`}>
            <div className="p-6">
                <div className="flex justify-between items-center mb-8">
                    <span className="text-2xl font-bold text-custom-primary">ATEN</span>
                    <div className="flex items-center space-x-2">
                        {/* Dark Mode Toggle for Mobile */}
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
                        <button
                            onClick={onClose}
                            className="p-2 rounded-md text-custom-secondary"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                <nav className="space-y-4">
                    <button
                        onClick={() => handleNavigation('/about')}
                        className="block w-full text-left text-custom-secondary hover:text-custom-primary py-2"
                    >
                        About
                    </button>
                    <button
                        onClick={() => handleNavigation('/projects')}
                        className="block w-full text-left text-custom-secondary hover:text-custom-primary py-2"
                    >
                        Projects
                    </button>
                    <button
                        onClick={() => handleNavigation('/contact')}
                        className="block w-full text-left text-custom-secondary hover:text-custom-primary py-2"
                    >
                        Contact
                    </button>
                    <button
                        onClick={() => handleNavigation('/pricing')}
                        className="block w-full text-left text-custom-secondary hover:text-custom-primary py-2"
                    >
                        Pricing
                    </button>
                    <hr className="my-4 border-custom" />
                    <button
                        onClick={() => handleNavigation('/login')}
                        className="block w-full text-left text-custom-secondary hover:text-custom-primary py-2"
                    >
                        Login
                    </button>
                    <Button
                        variant="primary"
                        onClick={() => handleNavigation('/signup')}
                        className="w-full"
                    >
                        Sign Up
                    </Button>
                </nav>
            </div>
        </div>
    );
};

export default MobileMenu;