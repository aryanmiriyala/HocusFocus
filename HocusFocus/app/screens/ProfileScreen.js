// ProfileScreen.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BottomBar from './BottomBar'; // Adjust the path accordingly

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the Profile Screen</Text>
      <BottomBar navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF4F2', // Same background color as BlankScreen
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative', // Important to set position relative
  },
  text: {
    fontSize: 20,
    color: '#000',
  },
});

export default ProfileScreen;
