import React from 'react';
import { StyleSheet, Text, View, WebView } from 'react-native';
import { Constants } from 'expo';

export default class App extends React.Component {
  onNavigationStateChange = navState => {
    if (navState.url.indexOf('https://www.google.com') === 0) {
      const regex = /#access_token=(.+)/;
      let accessToken = navState.url.match(regex)[1];
      console.log(accessToken);
    }
  };
  render() {
    const url = 'https://github.com/besutome/slides/tree/master/20170625-ReactNative-Nagoya/README.md';
    return (
      <WebView
        source={{
          uri: url,
        }}
        onNavigationStateChange={this.onNavigationStateChange}
        startInLoadingState
        scalesPageToFit
        javaScriptEnabled
        style={{ marginTop: 25 }}
      />
    );
  }
}