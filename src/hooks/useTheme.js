import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        // Check localStorage for saved theme preference
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            setIsDarkMode(true);
            document.body.classList.add('dark');
        }
    }, []);

    const toggleDarkMode = () => {
        setIsDarkMode(prev => {
            const newMode = !prev;

            if (newMode) {
                document.body.classList.add('dark');
                localStorage.setItem('theme', 'dark');
            } else {
                document.body.classList.remove('dark');
                localStorage.setItem('theme', 'light');
            }

            return newMode;
        });
    };

    const value = {
        isDarkMode,
        toggleDarkMode
    };

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}