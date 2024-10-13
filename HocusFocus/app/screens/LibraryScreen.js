// LibraryScreen.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BottomBar from './BottomBar'; // Adjust the path accordingly

const LibraryScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Library Screen</Text>
      <BottomBar navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF4F2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    color: '#000',
  },
});

export default LibraryScreen;