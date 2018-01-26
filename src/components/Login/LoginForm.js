import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class LoginForm extends Component {

  handleLoginEvent = (event) => {
    event.preventDefault();
    console.log('line 6, LOGIN PAGE');
    // const usernameInputValue = this.refs.usernameInput.value;
    // const passwordInputValue = this.refs.passwordInput.value;
    const username = this.refs.username.value;
    const password = this.refs.password.value;
    this.props.handleLogin(username, password);
  }


  render() {
    
    return (<View style={styles.container}>
      <StatusBar
      barStyle="dark-content"
    />
      <TextInput
        name="username"
        placeholder="username"
        placeholderTextColor="white"
        returnKeyType="next"
        ref={(input) => this.usernameInput = input}
        onChangeText={(username) => this.usernameInputValue = username}
        onSubmitEditing={() => this.passwordInput.focus()}
        keyboardType="email-address"
        autoCapitolize={false}
        style={styles.input}
      />

      <TextInput
        name="password"
        secureTextEntry
        placeholder="password"
        placeholderTextColor="white"
        returnKeyType="go"
        ref={(input) => this.passwordInput = input}
        autoCapitolize={false}
        style={styles.input}
      />

      <TouchableOpacity onPress={() => Actions.memberarea()} style={styles.buttonContiainer}>
        <Text style={styles.buttonText}>
          Login
        </Text>
      </TouchableOpacity>
    </View>)
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f39c12',
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(255,255,255, 0.2)',
    marginBottom: 10,
    color: '#FFF',
    paddingHorizontal: 10,
  },
  buttonContiainer:{
    backgroundColor: '#2c3e50',
    paddingVertical: 15
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFF',
    fontWeight: '700',
  }
})
