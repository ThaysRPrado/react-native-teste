import React, { Component } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import {Actions} from 'react-native-router-flux';

export default class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
        login: '',
        password: ''
    }
  }

  onPressLogin = () => {
    this.props.navigation.navigate('Home');
  }

  render() {
    return (
      <View style = {styles.container}>
        <TextInput style = {styles.input}  placeholder="Email" keyboardType='email-address' returnKeyType="next" onChangeText={(login) => this.setState({login: login})} />
        <TextInput style = {styles.input}  placeholder="Senha" secureTextEntry={true}  onChangeText={(password) => this.setState({password: password})} />
        <TouchableOpacity style={styles.buttonContainer} onPress={this.onPressLogin}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  input:{
    height: 40,
    marginBottom: 10,
    padding: 10,
    width: 300,
  },
  buttonContainer:{
    backgroundColor: '#2980b6',
    paddingVertical: 15,
    width: 200
  },
  buttonText:{
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700'
  }
});


