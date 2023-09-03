import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import LoginScreen from './src/screens/LoginScreen'
import { Colors } from './src/utils/Colors'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import RegisterScreen from './src/screens/RegisterScreen';
import HomeScreen from './src/screens/HomeScreen';
import TopTabbar from './src/navigation/TopTabbar';
import MainScreen from './src/screens/MainScreen';
const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
        <StatusBar backgroundColor={Colors.white}barStyle={'dark-content'} />
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='LoginScreen' component={LoginScreen} />
        <Stack.Screen name='RegisterScreen' component={RegisterScreen} />
        <Stack.Screen name='MainScreen' component={MainScreen} />
        <Stack.Screen name='TopTabbar' component={TopTabbar} />
       </Stack.Navigator>
      
      </NavigationContainer>
  )
}

export default App