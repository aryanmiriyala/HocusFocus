// BlankScreen.js

import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import SwitchSelector from 'react-native-switch-selector';

const BlankScreen = ({ navigation }) => {
  const [focusMode, setFocusMode] = useState("Easy"); // Default value for the toggle switch
  const [selectedButton, setSelectedButton] = useState("Easy"); // State to track selected button

  const toggleSwitch = (value) => {
    setFocusMode(value); // Set the focus mode based on the selected value
  };

  const handleButtonPress = (value) => {
    setSelectedButton(value); // Update selected button state
  };

  const focusOptions = [
    { label: 'Easy', value: 'Easy' }, // Option for Easy
    { label: 'Hard', value: 'Hard' }, // Option for Hard
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
            initial={0} // Default to 'Easy'
            onPress={toggleSwitch} // Function to call on option change
            style={styles.switchSelector} // Custom styling
            buttonColor="#FF69B4" // Color of the selected button
            textColor="#000" // Color of the text
            selectedColor="#fff" // Color of the text when selected
            hasPadding // Adds padding to the buttons
          />
        </View>
      </View>

      {/* Button Section */}
      <View style={styles.buttonSection}>
        {/* Easy Button */}
        <TouchableOpacity
          style={[styles.button, selectedButton === "Easy" && styles.selectedButton]}
          onPress={() => handleButtonPress("Easy")}
        >
          <Text style={styles.buttonText}>Easy</Text>
        </TouchableOpacity>

        {/* Text under the Easy button, always displayed */}
        <View style={styles.pointTextContainer}>
          <Text style={styles.pointText}>Social Media: -0.25pt/hr</Text>
          <Text style={styles.pointText}>Reading: 1.5pt/hr</Text>
          <Text style={styles.pointText}>On Phone: 1pt/hr</Text>
        </View>

        {/* Hard Button */}
        <TouchableOpacity
          style={[styles.button, selectedButton === "Hard" && styles.selectedButton]}
          onPress={() => handleButtonPress("Hard")}
        >
          <Text style={styles.buttonText}>Hard</Text>
        </TouchableOpacity>

        {/* Text under the Hard button, always displayed */}
        <View style={styles.pointTextContainer}>
          <Text style={styles.pointText}>Social Media: -0.50pt/hr</Text>
          <Text style={styles.pointText}>Reading: 1.5pt/hr</Text>
          <Text style={styles.pointText}>On Phone: 1pt/hr</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF4F2', // Same background color as HomeScreen
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: "15%",
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: 15,
    backgroundColor: '#FFF4F2',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  focusContainer: {
    flexDirection: 'row', // Arrange icon, label, and switch in a row
    alignItems: 'center', // Center vertically
  },
  focusLabel: {
    marginLeft: 15, // Space between icon and label
    fontSize: 16,
    marginRight: 10, // Space between label and switch
  },
  switchSelector: {
    width: 120,
  },
  buttonSection: {
    flex: 1, // Allow buttonSection to fill the available space
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
    width: '100%', // Set a consistent width for button section
    paddingBottom: "15%"
  },
  button: {
    backgroundColor: '#FF69B4', // Default button color
    borderRadius: 5,
    padding: 15,
    marginVertical: 10, // Space between buttons
    alignItems: 'center',
    width: '80%', // Width of buttons
  },
  selectedButton: {
    backgroundColor: '#FF1493', // Color for the selected button
  },
  buttonText: {
    color: '#FFFFFF', // Button text color
    fontSize: 18,
  },
  pointTextContainer: {
    alignItems: 'center', // Center the text horizontally
    marginBottom: 20, // Space below the point text
  },
  pointText: {
    fontSize: 16, // Font size for point text
    color: '#000', // Text color
  },
});

export default BlankScreen;
