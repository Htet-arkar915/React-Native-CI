import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import Home from '../screen/home';
import Setting from '../screen/setting';

export type RootStackParamList = {
  Home: undefined;
  Setting: {
    name: string;
    email: string;
  };
};
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white', // Background color of the navigator
    card: 'blue', // Card color (e.g., header)
    text: 'white', // Text color
    primary: 'white', // Tint color for active elements
  },
};

const Stack = createStackNavigator<RootStackParamList>();
const AppNavigator = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator
        screenOptions={{
          headerBackTitleVisible: false,
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Setting" component={Setting} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({});
