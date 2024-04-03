import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// Optional: import { createStackNavigator } from "@react-navigation/stack";
import { Feather } from "@expo/vector-icons";

import HomeScreen from "./screens/HomeScreen";
// Optional for future expansion:
// import StoreScreen from "./screens/StoreScreen";
// import RegisterScreen from "./screens/RegisterScreen";
// import LoginScreen from "./screens/LoginScreen";

import ProfileDropdown from "./components/ProfileDropdown";

const Tab = createBottomTabNavigator();
// Optional: const Stack = createStackNavigator();

export default function MainApp() {
	// const { direction } = useLanguage(); // If you're using language direction to adjust theme or layout

	return (
		<NavigationContainer>
			<Tab.Navigator
				initialRouteName='Home'
				screenOptions={({ route }) => ({
					tabBarIcon: ({ focused, color, size }) => {
						let iconName;

						if (route.name === "Home") {
							iconName = "home";
						} else if (route.name === "About") {
							iconName = "info";
						}
						return <Feather name={iconName} size={size} color={color} />;
					},
					tabBarActiveTintColor: "#424242",
					tabBarInactiveTintColor: "#31363F",
					headerRight: () => <ProfileDropdown />,
					headerStyle: {
						backgroundColor: "#FFFFFF",
					},
					headerTintColor: "#31363F",
					tabBarStyle: {
						backgroundColor: "#FFFFFF",
					},
				})}>
				<Tab.Screen name='Home' component={HomeScreen} />
				{/* Future potential tabs can go here */}
				{/* <Tab.Screen name="About" component={AboutScreen} /> */}
			</Tab.Navigator>
		</NavigationContainer>
	);
}
