import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class RideScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Rent A Ride!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'cyan',
  },
  text: {
    color: '#4C5D70',
    fontSize: 50,
  },
});
