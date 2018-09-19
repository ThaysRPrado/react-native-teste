import React, { Component } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
        login: '',
        password: ''
    }
  }

  render() {
    return (
      <View style = {styles.container}>
        <Text>HOME</Text>
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
  buttonText:{
    color: '#000',
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 40,
  }
});

