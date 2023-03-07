import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import Operan from './Operan';

export default class StateProps extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nama: 'Lorem Ipsum',
    };
  }

  gantiState() {
    this.setState({
      nama: 'Syafiq Fajrian Emha',
    });
  }

  render() {
    const {nama} = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Belajar State dan Props</Text>
        <Text style={styles.garis} />

        {/* isi */}
        <View style={styles.isi}>
          <Text>Ini adalah State : {nama}</Text>

          <Operan nama={nama} />

          <TouchableOpacity
            style={styles.tombol}
            onPress={() => this.gantiState()}>
            <Text style={{textAlign: 'center', color: '#fff'}}>
              Ganti State
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {padding: 30},
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  garis: {
    borderBottomWidth: 1,
  },
  isi: {
    marginTop: 30,
  },
  tombol: {
    backgroundColor: 'skyblue',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
});
