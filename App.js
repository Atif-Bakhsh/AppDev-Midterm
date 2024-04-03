import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from "./context/ThemeContext";
import MainApp from "./MainApp";

export default function App() {
    return (
        <LanguageProvider>
            <ThemeProvider>
                <MainApp />
            </ThemeProvider>
        </LanguageProvider>
    );
}
