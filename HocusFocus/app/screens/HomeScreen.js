// HomeScreen.js

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons for the eye icon
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook

const HomeScreen = () => {
  const navigation = useNavigation(); // Initialize navigation
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  const handleSubmit = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
      navigation.navigate('BlankScreen'); // Navigate to BlankScreen
    } else {
      Alert.alert("Invalid Email", "Please enter a valid email address.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hocus Focus</Text>
      <View style={styles.inputContainer}>
        <View style={styles.inputFieldContainer}>
          <Text style={styles.label}>Email:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            value={email}
            onChangeText={(text) => setEmail(text.toLowerCase())}
            autoCapitalize="none"
            keyboardType="email-address"
            textContentType="emailAddress"
          />
        </View>
        <View style={styles.inputFieldContainer}>
          <Text style={styles.label}>Password:</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.input}
              placeholder="Enter your password"
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={!showPassword} // Toggle secure text entry
              autoCapitalize="none"
              textContentType="password"
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Ionicons
                name={showPassword ? 'eye-off' : 'eye'}
                size={24}
                color="gray"
                style={styles.eyeIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF4F2', // Background color
    alignItems: 'center',
    justifyContent: 'flex-start', // Align items at the top
    paddingTop: 20, // Padding from the top
  },
  title: {
    fontSize: 48, // Set font size to a larger value
    fontWeight: 'bold', // Make the font bold
    marginBottom: 20, // Add some space below the title
    paddingTop: "15%",
    textAlign: 'center', // Center the text
  },
  inputContainer: {
    alignItems: 'center', // Center items in the container
    justifyContent: 'center', // Center items vertically within the input container
    width: '80%', // Set a consistent width for the input container
    marginBottom: 120,
    flex: 1, // Allow the input container to take the remaining space
  },
  inputFieldContainer: {
    flexDirection: 'row', // Arrange label and input in a row
    alignItems: 'center', // Center vertically
    marginBottom: 20, // Space below the input container
    width: '100%', // Set full width for input field containers
  },
  label: {
    fontSize: 16, // Font size for the label
    marginRight: 10, // Space between label and input
    width: 90, // Fixed width for the label for alignment
  },
  input: {
    borderWidth: 1, // Border for the input box
    borderColor: '#ccc', // Border color
    borderRadius: 5, // Rounded corners
    padding: 10, // Padding inside the input
    flex: 1, // Allow the input to take the remaining space
  },
  passwordContainer: {
    flexDirection: 'row', // Arrange input and icon in a row
    alignItems: 'center', // Center vertically
    flex: 1, // Allow the password input to take the remaining space
  },
  eyeIcon: {
    marginLeft: 10, // Space between input and icon
  },
  button: {
    backgroundColor: '#FF1493', // Button background color
    borderRadius: 5, // Rounded corners
    padding: 15, // Padding inside the button
    marginVertical: 20, // Space above and below the button
    width: '100%', // Set full width for the button
  },
  buttonText: {
    color: '#FFFFFF', // Button text color
    fontSize: 18, // Font size for the button text
    textAlign: 'center', // Center the text
  },
});

export default HomeScreen;
