import * as React from 'react';
import {TouchableOpacity, View, StyleSheet, TextInput} from 'react-native';
import {createSwitchNavigator, createAppContainer } from 'react-navigation';
import InputScreen from './screens/InputScreen';
import firebase from 'firebase';
import db from '../config'

export default class App extends React.Component{
  render(){
    return(
      <View>
        <AppContainer/>
      </View>
    )
  }
}

var Appnavigator= createSwitchNavigator({
  InputScreen: InputScreen,
  ReceiverDetails:ReceiverDetails
})

const AppContainer= createAppContainer(AppNavigator)
