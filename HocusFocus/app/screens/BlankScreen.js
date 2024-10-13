// BlankScreen.js

import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import SwitchSelector from 'react-native-switch-selector';
import BottomBar from './BottomBar'; // Adjust the path accordingly

const BlankScreen = ({ navigation }) => {
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

      {/* Button Section */}
      <View style={styles.buttonSection}>
        <TouchableOpacity
          style={[styles.button, selectedButton === "Easy" && styles.selectedButton]}
          onPress={() => handleButtonPress("Easy")}
        >
          <Text style={styles.buttonText}>Easy</Text>
        </TouchableOpacity>

        <View style={styles.pointTextContainer}>
          <Text style={styles.pointText}>Social Media: -0.25pt/hr</Text>
          <Text style={styles.pointText}>Reading: 1.5pt/hr</Text>
          <Text style={styles.pointText}>On Phone: 1pt/hr</Text>
        </View>

        <TouchableOpacity
          style={[styles.button, selectedButton === "Hard" && styles.selectedButton]}
          onPress={() => handleButtonPress("Hard")}
        >
          <Text style={styles.buttonText}>Hard</Text>
        </TouchableOpacity>

        <View style={styles.pointTextContainer}>
          <Text style={styles.pointText}>Social Media: -0.50pt/hr</Text>
          <Text style={styles.pointText}>Reading: 1.5pt/hr</Text>
          <Text style={styles.pointText}>On Phone: 1pt/hr</Text>
        </View>
      </View>

      {/* Next Button */}
      <TouchableOpacity
        style={styles.nextButton}
        onPress={() => navigation.navigate('ProfileScreen')} // Navigate to ProfileScreen
      >
        <Text style={styles.buttonText}>Next</Text>
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
    flexDirection: 'row',
    alignItems: 'center',
  },
  focusLabel: {
    marginLeft: 15,
    fontSize: 16,
    marginRight: 10,
  },
  switchSelector: {
    width: 120,
  },
  buttonSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingBottom: "15%"
  },
  button: {
    backgroundColor: '#FF69B4',
    borderRadius: 5,
    padding: 15,
    marginVertical: 10,
    alignItems: 'center',
    width: '80%',
  },
  selectedButton: {
    backgroundColor: '#FF1493',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
  pointTextContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  pointText: {
    fontSize: 16,
    color: '#000',
  },
  nextButton: {
    backgroundColor: '#FF69B4',
    borderRadius: 5,
    padding: 15,
    marginVertical: 20,
    alignItems: 'center',
    width: '80%',
    position: 'absolute',
    bottom: 55,
  },
});

export default BlankScreen;
