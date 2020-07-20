import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from "./screens/HomeScreen";
import LibrairyScreen from "./screens/LibrairyScreen";
import BookScreen from "./screens/BookScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home" 
      screenOptions = {{
        headerStyle : {
          backgroundColor : 'black'
        },
        headerTintColor:'#C02626',
      }}>
        <Stack.Screen 
        name="home" 
        component={HomeScreen}
        options= {{
          "title":"Accueil"
        }}/>
        <Stack.Screen 
        name="librairy" 
        component={LibrairyScreen}
        options= {{
          "title":"Bibliothèque"
        }} />
        <Stack.Screen 
        name="book" 
        component={BookScreen}
        options= {{
          "title":"Livre"
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}