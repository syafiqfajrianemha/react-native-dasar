import {Text, View} from 'react-native';
import React, {Component} from 'react';

export default class Operan extends Component {
  render() {
    return (
      <View>
        <Text>Ini adalah Props : {this.props.nama}</Text>
      </View>
    );
  }
}
