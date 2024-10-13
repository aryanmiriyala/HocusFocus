// App.js

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './app/screens/HomeScreen'; // Adjust the path if necessary
import BlankScreen from './app/screens/BlankScreen'; // Import the BlankScreen

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
        <Stack.Screen name="BlankScreen" component={BlankScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};