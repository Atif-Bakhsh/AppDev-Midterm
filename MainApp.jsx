import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "react-native";
// Optional: import { createStackNavigator } from "@react-navigation/stack";
import { Feather } from "@expo/vector-icons";

import HomeScreen from "./screens/HomeScreen";
// Optional for future expansion: 
// import StoreScreen from "./screens/StoreScreen";
// import RegisterScreen from "./screens/RegisterScreen";
// import LoginScreen from "./screens/LoginScreen";

import ProfileDropdown from "./components/ProfileDropdown";
import { useTheme } from "./context/ThemeContext";
import { useLanguage } from './context/LanguageContext'; // Assuming you're adjusting themes or other settings based on language

const Tab = createBottomTabNavigator();
// Optional: const Stack = createStackNavigator();

const AboutScreen = () => {
	return <Text>About</Text>;
};

export default function MainApp() {
    const { theme } = useTheme();
    const { direction } = useLanguage(); // If you're using language direction to adjust theme or layout

    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName='Home'
                screenOptions={({ route }) => ({
					tabBarIcon: ({ focused, color, size }) => {
						let iconName;
				
						if (route.name === 'Home') {
							iconName = 'home';
						} else if (route.name === 'About') {
							iconName = 'info';
						}
						return <Feather name={iconName} size={size} color={color} />;
					},
					tabBarActiveTintColor: theme.activeColor,
					tabBarInactiveTintColor: theme.textColor,
					headerRight: () => (<ProfileDropdown />),
					headerStyle: {
						backgroundColor: theme.backgroundColor,
					},
					headerTintColor: theme.textColor,
					tabBarStyle: {
						backgroundColor: theme.backgroundColor,
					},
                })}
            >
                <Tab.Screen name="Home" component={HomeScreen} />
                {/* Future potential tabs can go here */}
                {/* <Tab.Screen name="About" component={AboutScreen} /> */}
            </Tab.Navigator>
        </NavigationContainer>
    );
}
