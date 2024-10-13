// BottomBar.js

import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const BottomBar = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Home Button */}
      <TouchableOpacity onPress={() => navigation.navigate('BlankScreen')}>
        <Icon name="home" size={30} color="#000" />
      </TouchableOpacity>

      {/* Library Button */}
      <TouchableOpacity onPress={() => navigation.navigate('LibraryScreen')}>
        <Icon name="book" size={30} color="#000" />
      </TouchableOpacity>

      {/* Shop Button */}
      <TouchableOpacity onPress={() => navigation.navigate('ShopScreen')}>
        <Icon name="shopping-cart" size={30} color="#000" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'bottom',
    height: 55,
    width: '70%', // Adjusted to full width
    backgroundColor: '#FFF4F2', // Background color for the bottom bar
    borderTopWidth: 0,
    borderTopColor: 'none',
    position: 'absolute', // Position at the bottom of the screen
    bottom: 0, // Align to the bottom
  },
});

export default BottomBar;
