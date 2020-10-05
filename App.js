/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';

import {ImageBackground, StyleSheet, View, Text, Button} from 'react-native';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground style={styles.ImageBackground}>
          <Text style={styles.text}>hello splash </Text>
          <Button title={'LogIn'}></Button>
        </ImageBackground>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {flex: 1},
  ImageBackground: {
    flex: 1,
    backgroundColor: 'blue',
  },
  text: {fontSize: 30, color: 'red'},
});

export default App;
