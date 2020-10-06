/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {ImageBackground, StyleSheet, View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Login} from './components/Login.js';
const App = () => {
  return <NavigationContainer></NavigationContainer>;
};

const styles = StyleSheet.create({
  container: {flex: 1},
  ImageBackground: {
    flex: 1,
    backgroundColor: 'blue',
  },
  text: {fontSize: 30, color: 'red'},
});

export default App;
