// App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './app/screens/HomeScreen';
import BlankScreen from './app/screens/BlankScreen';
import ProfileScreen from './app/screens/ProfileScreen';
import LibraryScreen from './app/screens/LibraryScreen'; // Add this import
import ShopScreen from './app/screens/ShopScreen'; // Add this import
import BottomBar from './app/screens/BottomBar'; // Adjust the path accordingly
import SampleBook from './app/screens/SampleBook';
import QuizScreen from './app/screens/QuizScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name="HomeScreen" component={HomeScreen} /> */}
        <Stack.Screen name="BlankScreen" component={BlankScreen} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name="LibraryScreen" component={LibraryScreen} />
        <Stack.Screen name="ShopScreen" component={ShopScreen} />
        <Stack.Screen name="SampleBook" component={SampleBook} />
        <Stack.Screen name="QuizScreen" component={QuizScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
