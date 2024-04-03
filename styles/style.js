import { StyleSheet } from "react-native";

export const styles = (theme) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.containerColor, // Ensures consistent theme usage
      alignItems: "center",
      justifyContent: "center",
    },
    h1: {
      fontSize: 24,
      fontWeight: "bold", // Added boldness for h1 headers
      color: theme.textColor,
      marginVertical: 10, // Adds vertical spacing
    },
    title: {
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 20,
      color: theme.textColor,
    },
    input: {
      width: "80%",
      height: 50,
      borderWidth: 1,
      borderColor: theme.textColor, // Consistent with theme
      borderRadius: 10,
      paddingHorizontal: 15,
      marginBottom: 20,
      fontSize: 16,
      color: theme.textColor,
    },
    button: {
      width: "80%",
      height: 50,
      backgroundColor: theme.buttonColor, // Assuming there's a buttonColor in the theme for better customization
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 10,
      elevation: 3, // Adds shadow for Android
      shadowColor: "#000", // Shadow for iOS
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
    },
    buttonText: {
      fontSize: 18,
      fontWeight: "bold",
      color: theme.buttonTextColor || theme.textColor, // Allows for a different text color on buttons
    },
    buttonSecondary: {
      marginTop: 20,
      backgroundColor: theme.secondaryButtonColor, // Differentiate secondary button
    },
    paragraph: {
      marginVertical: 10,
      color: theme.textColor,
      fontSize: 16, // Unified font size for paragraph
    },
    cardsContainer: {
      backgroundColor: theme.containerColor,
      padding: 20, // Reduced padding for tighter layout
      alignItems: 'center', // Center cards within the container
    },
    card: {
      backgroundColor: theme.cardBackgroundColor || theme.backgroundColor, // Allows customization of card background
      padding: 20,
      margin: 10,
      borderRadius: 10,
      width: '90%', // Ensures cards are not too wide on large screens
    },
    cardImage: {
      width: "100%",
      aspectRatio: 1,
      borderRadius: 10,
    },
    cardDetails: {
      marginTop: 10,
    },
    cardTitle: {
      fontSize: 18,
      fontWeight: "bold",
      color: theme.textColor,
    },
    cardRating: {
      fontSize: 16,
      color: "yellow",
      marginTop: 5,
    },
    cardPrice: {
      fontSize: 16,
      color: theme.textColor,
      backgroundColor: theme.priceBackgroundColor || theme.containerColor, // Allows for customization
      padding: 5,
      borderRadius: 5,
      marginTop: 5,
      textAlign: "center",
      fontWeight: "bold",
    },
  });
};
