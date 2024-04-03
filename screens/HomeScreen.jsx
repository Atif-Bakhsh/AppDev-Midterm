import React, { useState, useEffect, useContext } from 'react';
import { View, Text, FlatList, Image, RefreshControl, TextInput, StyleSheet, I18nManager } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useLanguage } from '../context/LanguageContext'; // Import the useLanguage hook

export default function HomeScreen() {
    const { language, direction } = useLanguage(); // Use language and direction from context
    const [books, setBooks] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredBooks, setFilteredBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);

    useEffect(() => {
        I18nManager.forceRTL(direction === 'rtl'); // Force RTL layout if direction is 'rtl'
    }, [direction]);

    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await axios.get('https://dev.iqrakitab.net/api/books');
            setBooks(response.data.data);
            setFilteredBooks(response.data.data);
        } catch (error) {
            console.error('Error fetching data:', error);
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
        const results = books.filter(book =>
            book.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredBooks(results);
    }, [searchTerm, books]);

    // Adjust styles based on direction
    const dynamicStyles = StyleSheet.create({
		container: {
			flex: 1,
			backgroundColor: theme.backgroundColor, // Use theme's background color
			alignItems: 'center',
			justifyContent: 'center',
		},
		searchBar: {
			fontSize: 18,
			padding: 10,
			borderColor: theme.textColor, // Use theme's text color for border
			borderWidth: 1,
			borderRadius: 5,
			margin: 10,
			backgroundColor: theme.containerColor, // Background for input
			color: theme.textColor, // Text input color
			textAlign: 'auto',
		},
		card: {
			flexDirection: 'row',
			backgroundColor: theme.containerColor,
			marginBottom: 10,
			elevation: 2,
			borderRadius: 5,
			overflow: 'hidden',
		},
		cardImage: {
			width: 100,
			height: 150,
			resizeMode: 'cover', // Cover the designated area
		},
		cardDetails: {
			flex: 1,
			padding: 10,
		},
		cardTitle: {
			fontSize: 16,
			fontWeight: 'bold',
			textAlign: direction === 'rtl' ? 'right' : 'left', // Adjust text alignment
		},
		cardAuthor: {
			fontSize: 14,
			color: '#666',
			marginTop: 5,
			textAlign: direction === 'rtl' ? 'right' : 'left', // Adjust text alignment
		},
		cardCategory: {
			fontSize: 14,
			color: '#666',
			marginTop: 5,
			textAlign: direction === 'rtl' ? 'right' : 'left', // Adjust text alignment
		},
		// You can add more styles as needed
	});
	

    return (
        <View style={dynamicStyles.container}>
            <TextInput
                style={dynamicStyles.searchBar}
                placeholder="Search by book name..."
                value={searchTerm}
                onChangeText={setSearchTerm}
            />
            {loading ? (
                <Text>Loading...</Text>
            ) : (
                <FlatList
                    data={filteredBooks}
                    keyExtractor={(item) => item._id}
                    refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
                    renderItem={({ item }) => (
						<View style={dynamicStyles.card}>
							<Image source={{ uri: `https://dev.iqrakitab.net/${item.coverPhotoUri}` }} style={dynamicStyles.cardImage} />
							<View style={dynamicStyles.cardDetails}>
								<Text style={dynamicStyles.cardTitle}>{item.title}</Text>
								<Text style={dynamicStyles.cardAuthor}>Author: {item.author.name}</Text>
								<Text style={dynamicStyles.cardCategory}>Category: {item.category.name}</Text>
							</View>
						</View>
					)}
                />
            )}
        </View>
    );
}
