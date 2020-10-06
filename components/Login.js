import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';

const Login = () => {
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  return (
    <View style={styles.container}>
      <View style={styles.formView}>
        <TextInput
          style={styles.textInput}
          value={userName}
          onChangeText={(userName) => setUserName(userName)}></TextInput>
        <TextInput
          style={styles.textInput}
          value={password}
          onChangeText={(password) => setPassword(password)}></TextInput>
        <Button title="press"></Button>
      </View>
      <Text>
        hello {'\n'}
        {userName} {'\n'}
        {password}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderWidth: 3,
    borderColor: 'blue',
    flex: 1,
    borderRadius: 4,
  },
  formView: {borderWidth: 2, borderColor: 'black', borderRadius: 7},
  textInput: {borderWidth: 1, borderRadius: 3, borderColor: 'gray'},
  button: {},
});
export default Login;
