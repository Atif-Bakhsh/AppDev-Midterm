import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('en'); // default language
    const [direction, setDirection] = useState('ltr'); // default direction

    const toggleLanguage = () => {
        if (language === 'en') {
            setLanguage('ur');
            setDirection('rtl');
        } else {
            setLanguage('en');
            setDirection('ltr');
        }
    };

    return (
        <LanguageContext.Provider value={{ language, direction, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};
