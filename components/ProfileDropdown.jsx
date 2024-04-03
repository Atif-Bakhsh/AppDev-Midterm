import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet, Text, Modal } from "react-native";
import useAuth from "../hooks/UserHook";
import { Avatar } from "react-native-paper";
import { useTheme } from "../context/ThemeContext"; // Import your useTheme hook

const ProfileDropdown = () => {
    const [isVisible, setIsVisible] = useState(false);
    const { signOutUser } = useAuth();
    const { theme } = useTheme(); // Use the useTheme hook to access the theme

    const handleAvatarPress = () => {
        setIsVisible(!isVisible); // Toggle the dropdown visibility
    };

    const handleSignOut = () => {
        signOutUser(); // Call the signOut function when the button is pressed
        setIsVisible(false); // Hide the dropdown after selection
    };

    // Move the styles inside the component or use a function to access theme dynamically
    const styles = getStyles(theme); // Pass theme to getStyles function

    return (
        <View style={styles.container}>
            {/* User Avatar */}
            <TouchableOpacity onPress={handleAvatarPress}>
                <Avatar.Icon size={32} icon="account" style={styles.avatar} />
            </TouchableOpacity>

            {/* Dropdown */}
            <Modal
                visible={isVisible}
                transparent={true}
                animationType="slide"
                onRequestClose={() => setIsVisible(false)}>
                <View style={styles.dropdown}>
                    <TouchableOpacity
                        style={styles.option}
                        onPress={() => {
                            // Your toggleLanguage logic here
                            setIsVisible(false); // Hide the dropdown after selection
                        }}>
                        <Text>Switch Language</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.option}
                        onPress={() => {
                            handleSignOut();
                        }}>
                        <Text>Logout</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
    );
};

// Define a function outside the component to dynamically create styles based on the theme
const getStyles = (theme) => StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        marginRight: 10,
    },
    dropdown: {
        position: "absolute",
        top: 50,
        right: 10,
        backgroundColor: theme.containerColor, // Use the container color from the theme
        borderRadius: 5,
        padding: 10,
        elevation: 5,
    },
    avatar: {
        backgroundColor: "#22739850", // Or use theme for dynamic colors
    },
    option: {
        padding: 10,
        // Add color from theme if needed
    },
});

export default ProfileDropdown;
