import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Banana from './Banana.js';
import Greeting from './Greeting.js'
import Blink from './Blink.js';
import CountButton from './CountButton.js';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Greeting name='Rexxar' />
        <Greeting name='Jaina' />
        <Greeting name='Valeera' />
        <Banana />
        <Blink text='I love to blink' />
        <Blink text='Yes blinking is so great' />
        <CountButton />
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
  },
});