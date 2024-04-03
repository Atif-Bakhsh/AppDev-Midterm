import React, { useState, useEffect } from "react";
import {
	View,
	Text,
	FlatList,
	Image,
	RefreshControl,
	TextInput,
	StyleSheet,
	I18nManager,
} from "react-native";
import axios from "axios";
import { useLanguage } from "../context/LanguageContext"; // Import the useLanguage hook

export default function HomeScreen() {
	const { direction } = useLanguage(); // Use language and direction from context
	const [books, setBooks] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");
	const [filteredBooks, setFilteredBooks] = useState([]);
	const [loading, setLoading] = useState(true);
	const [refreshing, setRefreshing] = useState(false);

	useEffect(() => {
		I18nManager.forceRTL(direction === "rtl"); // Force RTL layout if direction is 'rtl'
	}, [direction]);

	const fetchData = async () => {
		setLoading(true);
		try {
			const response = await axios.get("https://dev.iqrakitab.net/api/books");
			setBooks(response.data.data);
			setFilteredBooks(response.data.data);
		} catch (error) {
			console.error("Error fetching data:", error);
		}
		setLoading(false);
	};

	const onRefresh = () => {
		setRefreshing(true);
		fetchData().then(() => setRefreshing(false));
	};

	useEffect(() => {
		fetchData();
	}, []);

	useEffect(() => {
		const results = books.filter((book) =>
			book.title.toLowerCase().includes(searchTerm.toLowerCase())
		);
		setFilteredBooks(results);
	}, [searchTerm, books]);

	// Adjust styles based on direction
	const dynamicStyles = StyleSheet.create({
		container: {
			flex: 1,
			backgroundColor: "#FFFFFF", // Use theme's background color
			// alignItems: "center",
			justifyContent: "center",
		},
		searchBar: {
			fontSize: 18,
			padding: 10,
			borderColor: "#31363F", // Use theme's text color for border
			borderWidth: 1,
			borderRadius: 5,
			margin: 10,
			backgroundColor: "#F0F0F0", // Background for input
			color: "#31363F", // Text input color
			textAlign: "auto",
		},
		card: {
			flexDirection: "row",
			backgroundColor: "#F0F0F0",
			marginBottom: 10,
			elevation: 2,
			borderRadius: 5,
			overflow: "hidden",
		},
		cardImage: {
			width: 100,
			height: 150,
			resizeMode: "cover", // Cover the designated area
		},
		cardDetails: {
			flex: 1,
			padding: 10,
		},
		cardTitle: {
			fontSize: 16,
			fontWeight: "bold",
			textAlign: direction === "rtl" ? "right" : "left", // Adjust text alignment
		},
		cardAuthor: {
			fontSize: 14,
			color: "#666",
			marginTop: 5,
			textAlign: direction === "rtl" ? "right" : "left", // Adjust text alignment
		},
		cardCategory: {
			fontSize: 14,
			color: "#666",
			marginTop: 5,
			textAlign: direction === "rtl" ? "right" : "left", // Adjust text alignment
		},
		// You can add more styles as needed
	});

	return (
		<View style={dynamicStyles.container}>
			<TextInput
				style={dynamicStyles.searchBar}
				placeholder='Search by book name...'
				value={searchTerm}
				onChangeText={setSearchTerm}
			/>
			{loading ? (
				<Text>Loading...</Text>
			) : (
				<FlatList
    data={filteredBooks}
    keyExtractor={(item) => item._id}
    refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
    }
    renderItem={({ item }) => (
        <View style={dynamicStyles.card}>
            <Image
                source={{ uri: `https://dev.iqrakitab.net/${item.coverPhotoUri}` }}
                style={dynamicStyles.cardImage}
            />
            <View style={dynamicStyles.cardDetails}>
                <Text style={dynamicStyles.cardTitle}>{item.title}</Text>
                {item.description ? (
                    <Text style={dynamicStyles.cardDescription}>Description: {item.description}</Text>
                ) : null}
                <Text style={dynamicStyles.cardAuthor}>
                    Author: {item.author.name}
                </Text>
                <Text style={dynamicStyles.cardCategory}>
                    Category: {item.category.name}
                </Text>
                {item.chapters.length > 0 ? (
                    <Text style={dynamicStyles.cardChapters}>Chapters: {item.chapters.join(", ")}</Text>
                ) : null}
                <Text style={dynamicStyles.cardType}>Book Type: {item.bookType}</Text>
                <Text style={dynamicStyles.cardPublished}>Published: {item.isPublished ? 'Yes' : 'No'}</Text>
                <Text style={dynamicStyles.cardLanguage}>Language: {item.isArabic ? 'Arabic' : 'Other'}</Text>
                {item.averageRating !== null ? (
                    <Text style={dynamicStyles.cardRating}>Average Rating: {item.averageRating}</Text>
                ) : null}
                <Text style={dynamicStyles.cardCreated}>Created At: {new Date(item.createdAt).toLocaleDateString()}</Text>
                <Text style={dynamicStyles.cardUpdated}>Updated At: {new Date(item.updatedAt).toLocaleDateString()}</Text>
            </View>
        </View>
    )}
/>

			)}
		</View>
	);
}
