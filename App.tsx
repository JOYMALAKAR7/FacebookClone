import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import LoginScreen from './src/screens/LoginScreen'
import { Colors } from './src/utlis/Colors'


const App = () => {
  return (
    <View>
      <StatusBar backgroundColor={Colors.white}barStyle={'dark-content'} />
      <LoginScreen />
    </View>
  )
}

export default App