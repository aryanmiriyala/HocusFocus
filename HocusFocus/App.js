import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); // State for password

  const handleSubmit = () => {
    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
      Alert.alert("Email Submitted", `You entered: ${email}`);
    } else {
      Alert.alert("Invalid Email", "Please enter a valid email address.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hocus Focus</Text>

      {/* Container for Email, Password, and Submit */}
      <View style={styles.inputContainer}>
        {/* Label and Text Input for Email */}
        <View style={styles.inputFieldContainer}>
          <Text style={styles.label}>Email:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            placeholderTextColor="#999" // Placeholder color
            value={email} // Control the TextInput
            onChangeText={setEmail} // Update email state
          />
        </View>

        {/* Label and Text Input for Password */}
        <View style={styles.inputFieldContainer}>
          <Text style={styles.label}>Password:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            placeholderTextColor="#999" // Placeholder color
            value={password} // Control the TextInput
            onChangeText={setPassword} // Update password state
            secureTextEntry // Hides the password text
          />
        </View>

        {/* Submit Button */}
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

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
  button: {
    backgroundColor: '#007BFF', // Button background color
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
