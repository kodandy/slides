import React from "react";
import { Button, View, Text } from 'react-native';

export default class CountButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
    this.addCount = this.addCount.bind(this);
  }

  addCount() {
    this.setState({
      count: this.state.count + 1
    });
  }

  render() {
    return (
      <View>
        <Button
          title='Add'
          onPress={this.addCount}
        />
        <Text>{this.state.count}</Text>
      </View>
    );
  }
}