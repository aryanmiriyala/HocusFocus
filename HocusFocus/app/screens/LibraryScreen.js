// LibraryScreen.js

import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';
import BottomBar from './BottomBar'; // Adjust the path accordingly
import Icon from 'react-native-vector-icons/FontAwesome';
import SwitchSelector from 'react-native-switch-selector';

const LibraryScreen = ({ navigation }) => {
    const [focusMode, setFocusMode] = useState("Easy");
    const [selectedButton, setSelectedButton] = useState("Easy");
    const [searchText, setSearchText] = useState('');

    const toggleSwitch = (value) => {
        setFocusMode(value);
    };

    const handleButtonPress = (value) => {
        setSelectedButton(value);
    };

    const handleSearch = () => {
        console.log("Search for:", searchText);
    };

    const handleBookPress = () => {
        navigation.navigate('SampleBook'); // Navigate to SampleBook screen
    };

    const focusOptions = [
        { label: 'Easy', value: 'Easy' },
        { label: 'Hard', value: 'Hard' },
    ];

    return (
        <View style={styles.container}>
            {/* Top Bar */}
            <View style={styles.topBar}>
                <TouchableOpacity onPress={() => console.log('Settings pressed')}>
                    <Icon name="cog" size={30} color="#000" />
                </TouchableOpacity>
                <View style={styles.focusContainer}>
                    <TouchableOpacity onPress={() => console.log('Moon pressed')}>
                        <Icon name="moon-o" size={30} color="#000" />
                    </TouchableOpacity>
                    <Text style={styles.focusLabel}>HocusFocus Mode</Text>
                    <SwitchSelector
                        options={focusOptions}
                        initial={0}
                        onPress={toggleSwitch}
                        style={styles.switchSelector}
                        buttonColor="#FF69B4"
                        textColor="#000"
                        selectedColor="#fff"
                        hasPadding
                    />
                </View>
            </View>

            {/* Search Bar */}
            <View style={styles.searchBarContainer}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Why can't you read?"
                    placeholderTextColor="#888" // Placeholder color
                    value={searchText}
                    onChangeText={setSearchText}
                />
                <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
                    <Text style={styles.searchButtonText}>Search</Text>
                </TouchableOpacity>
            </View>

            {/* Example Book */}
            <TouchableOpacity style={styles.bookContainer} onPress={handleBookPress}>
                <Image
                    source={{ uri: 'https://cdn.theatlantic.com/thumbor/egQNABTQqEMjlhSG9KuTFQhF08E=/0x0:1420x1775/1330x1663/media/img/2024/09/30/Horowitch_Vert/original.png' }} // Replace with your image URL
                    style={styles.bookImage}
                />
                <Text style={styles.bookTitle}>The Atlantic</Text>
            </TouchableOpacity>

            <BottomBar navigation={navigation} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF4F2',
        alignItems: 'center',
        justifyContent: 'flex-start',
        position: 'relative',
    },
    text: {
        fontSize: 20,
        color: '#000',
    },
    topBar: {
        top: '7%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        padding: 15,
        position: 'absolute',
        backgroundColor: '#FFF4F2',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    focusContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    focusLabel: {
        marginLeft: 18,
        fontSize: 16,
        marginRight: 10,
    },
    switchSelector: {
        width: 120,
    },
    searchBarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: '38%', // Adjust the top margin as needed
        width: '90%', // Width of the search bar container
        backgroundColor: '#fff', // Background color of the search bar
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
        elevation: 2,
    },
    searchInput: {
        flex: 1,
        padding: 10,
        fontSize: 16,
        borderRadius: 10,
        backgroundColor: '#fff',
    },
    searchButton: {
        padding: 9,
        backgroundColor: '#FF69B4', // Button color
        borderRadius: 12,
        marginRight: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    searchButtonText: {
        color: '#fff', // Text color of the button
    },
    bookContainer: {
        position: 'relative',
        alignItems: 'left',
        marginTop: 20, // Space between search bar and book image
        marginRight: 250,
    },
    bookImage: {
        width: 100, // Set the width of the book image
        height: 150, // Set the height of the book image
        borderRadius: 5,
    },
    bookTitle: {
        marginTop: 10,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
    },
});

export default LibraryScreen;
