import { StyleSheet } from "react-native";

export const styles = (theme) => {
	return StyleSheet.create({
		container: {
			flex: 1,
			backgroundColor: theme.containerColor,
			alignItems: "center",
			justifyContent: "center",
			color: theme.textColor,
		},
		h1: {
			fontSize: 24,
			color: theme.textColor,
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
			borderColor: "#ccc",
			borderRadius: 10,
			paddingHorizontal: 15,
			marginBottom: 20,
			fontSize: 16,
			borderWidth: 1,
			borderColor: theme.textColor,
			color: theme.textColor,
		},
		button: {
			width: "80%",
			height: 50,
			backgroundColor: theme.backgroundColor,
			justifyContent: "center",
			alignItems: "center",
			borderRadius: 10,
		},
		buttonText: {
			fontSize: 18,
			fontWeight: "bold",
			color: theme.textColor,
		},
		buttonSecondary: {
			marginTop: 20,
		},
		paragraph: {
			marginVertical: 10,
			color: theme.textColor,
		},
		cardsContainer: {
			backgroundColor: theme.containerColor,
			padding: 40,
		},
		card: {
			backgroundColor: theme.backgroundColor,
			padding: 25,
			margin: 10,
			borderRadius: 10,
		},
		cardImage: {
			width: "100%",
			aspectRatio: 1,
			borderRadius: 10,
		},
		cardDetials: {
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
			backgroundColor: theme.containerColor,
			padding: 5,
			borderRadius: 5,
			marginTop: 5,
			textAlign: "center",
			fontWeight: "bold",
		},
	});
};
