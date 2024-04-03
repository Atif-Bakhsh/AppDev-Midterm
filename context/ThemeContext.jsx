
import React, { createContext, useContext } from "react";

// Define a singular theme
const theme = {
    backgroundColor: "#FFFFFF", // White background
    textColor: "#31363F", // Dark grey text
    containerColor: "#F0F0F0", // Light grey for containers
    activeColor: "#424242", // Dark grey for active elements or highlights
};

const ThemeContext = createContext(theme); // Provide the theme directly

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
	return (
		<ThemeContext.Provider value={theme}>
			{children}
		</ThemeContext.Provider>
	);
};
