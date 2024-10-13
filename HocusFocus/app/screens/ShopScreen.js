// ShopScreen.js

import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';
import BottomBar from './BottomBar'; // Adjust the path accordingly
import Icon from 'react-native-vector-icons/FontAwesome';
import SwitchSelector from 'react-native-switch-selector';

const ShopScreen = ({ navigation }) => {
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
        // Add your search functionality here
        console.log("Search for:", searchText);
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
});

export default ShopScreen;
