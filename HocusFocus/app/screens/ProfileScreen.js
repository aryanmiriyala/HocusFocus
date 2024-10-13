import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import BottomBar from './BottomBar'; // Adjust the path accordingly
import Icon from 'react-native-vector-icons/FontAwesome';
import SwitchSelector from 'react-native-switch-selector';

const ProfileScreen = ({ navigation }) => {
    const [focusMode, setFocusMode] = useState("Easy");
    const [selectedButton, setSelectedButton] = useState("Easy");

    const toggleSwitch = (value) => {
        setFocusMode(value);
    };

    const handleButtonPress = (value) => {
        setSelectedButton(value);
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

            {/* Profile Picture and Welcome Label */}
            <View style={styles.profilePictureContainer}>
                <Image
                    source={{ uri: 'https://static0.srcdn.com/wordpress/wp-content/uploads/2023/10/yuta-from-jujutsu-kaisen.jpg' }} // Replace with your image URL
                    style={styles.profilePicture}
                />
                <Text style={styles.welcomeLabel}>Welcome, Uta Okkutsu</Text>
            </View>

            {/* Stats Table */}
            <View style={styles.tableContainer}>
                <View style={styles.tableRow}>
                    <Text style={styles.tableCell}>3.8</Text>
                    <Text style={styles.tableCell}>1</Text>
                    <Text style={styles.tableCell}>0.5</Text>
                </View>
                <View style={styles.tableRow}>
                    <Text style={styles.tableCell}>Total Points</Text>
                    <Text style={styles.tableCell}>Books Read</Text>
                    <Text style={styles.tableCell}>Points Earned Today</Text>
                </View>
            </View>

            {/* Second Table */}
            <View style={styles.secondTableContainer}>
                <View style={styles.secondTableRow}>
                    <Text style={styles.secondTableCell}>Total Time</Text>
                    <Text style={styles.secondTableCell}>4h 30min</Text>
                </View>
                <View style={styles.secondTableRow}>
                    <Text style={styles.secondTableCell}>Social Media Time</Text>
                    <Text style={styles.secondTableCell}>1h 30min</Text>
                </View>
                <View style={styles.secondTableRow}>
                    <Text style={styles.secondTableCell}>Reading Time</Text>
                    <Text style={styles.secondTableCell}>3h 0min</Text>
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
    justifyContent: 'flex-start', // Align items to start so the profile picture is below the top bar
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
  profilePictureContainer: {
    marginTop: '47%', // Add margin to position below the top bar
    alignItems: 'flex-start', // Align items to start
    width: '100%', // Full width for alignment
    flexDirection: 'row', // Arrange items in a row
    alignItems: 'center', // Center align the items vertically
    paddingHorizontal: 20, // Add some horizontal padding
  },
  profilePicture: {
    width: 140, // Set width for the circular image
    height: 140, // Set height for the circular image
    borderRadius: 70, // Half of width/height to make it circular
    marginRight: 20, // Add some margin to the right
  },
  welcomeLabel: {
    fontSize: 18, // Font size for the welcome label
    color: '#000', // Font color
    fontWeight: 'bold'
  },
  tableContainer: {
    marginTop: 20, // Space between profile picture and table
    width: '90%', // Full width
    alignItems: 'center', // Center align table contents
    backgroundColor: '#FFEBEE', // Very light pink background
    borderRadius: 10, // Optional: Rounded corners for aesthetics
    paddingVertical: 20, // Add some vertical padding
    paddingHorizontal: 10, // Add some horizontal padding
  },
  tableRow: {
    flexDirection: 'row', // Row layout for cells
    justifyContent: 'space-around', // Space out the cells evenly
    width: '80%', // Width of the table row
    paddingVertical: 10, // Vertical padding for rows
  },
  tableCell: {
    fontSize: 17, // Font size for table cells
    color: '#000', // Text color
    textAlign: 'center', // Center text in cells
    flex: 1, // Allow cells to take equal space
    fontWeight: 'bold'
  },
  secondTableContainer: {
    marginTop: 20, // Space between first table and second table
    width: '90%', // Full width
    alignItems: 'center', // Center align table contents
    backgroundColor: '#FFEBEE', // Very light pink background
    borderRadius: 10, // Optional: Rounded corners for aesthetics
    paddingVertical: 20, // Add some vertical padding
    paddingHorizontal: 10, // Add some horizontal padding
  },
  secondTableRow: {
    flexDirection: 'row', // Row layout for cells
    justifyContent: 'space-between', // Space out the cells evenly
    width: '80%', // Width of the second table row
    paddingVertical: 10, // Vertical padding for rows
  },
  secondTableCell: {
    fontSize: 17, // Font size for second table cells
    color: '#000', // Text color
    textAlign: 'center', // Center text in cells
    flex: 1, // Allow cells to take equal space
    fontWeight: 'bold'
  },
});

export default ProfileScreen;
