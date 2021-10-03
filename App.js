import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';

import { useFonts } from 'expo-font';

import {
  MainLayout,
} from "./screens";

const Stack = createStackNavigator();

const App = () => {

  const [loaded] = useFonts({
    "Poppins-Black": require('./assets/fonts/Poppins-Black.ttf'),
    "Poppins-Bold": require('./assets/fonts/Poppins-Bold.ttf'),
    "Poppins-SemiBold": require('./assets/fonts/Poppins-SemiBold.ttf'),
    "Poppins-Regular": require('./assets/fonts/Poppins-Regular.ttf'),
  })

  if (!loaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName={'Home'}
      >
        <Stack.Screen
          name="Home"
          component={MainLayout}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App