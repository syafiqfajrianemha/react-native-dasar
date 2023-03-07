import {Text, StyleSheet, View} from 'react-native';
import React, {Component} from 'react';

export default class DesainTampilan extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Belajar Desain Tampilan dan FlexBox</Text>
        <Text style={styles.garis} />

        {/* isi */}
        <View style={styles.isi}>
          <Text>Flex Direction Row (Horizontal)</Text>
          <View style={styles.flexHorizontal}>
            <View style={styles.kotakMerah} />
            <View style={styles.kotakBiru} />
            <View style={styles.kotakHijau} />
          </View>
        </View>

        <View style={styles.isi}>
          <Text>Flex Direction Column (Vertikal)</Text>
          <View>
            <View style={styles.kotakMerah} />
            <View style={styles.kotakBiru} />
            <View style={styles.kotakHijau} />
          </View>
        </View>

        <View style={styles.isi}>
          <Text>Justify Content</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={styles.kotakMerah} />
            <View style={styles.kotakBiru} />
            <View style={styles.kotakHijau} />
          </View>
        </View>

        <View style={styles.isi}>
          <Text>Align Items</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View style={styles.kotakMerah} />
            <View style={styles.kotakBiru} />
            <View style={styles.kotakHijau} />
          </View>
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
  flexHorizontal: {
    flexDirection: 'row',
  },
  kotakMerah: {
    width: 50,
    height: 50,
    backgroundColor: 'red',
  },
  kotakBiru: {
    width: 50,
    height: 30,
    backgroundColor: 'blue',
  },
  kotakHijau: {
    width: 50,
    height: 50,
    backgroundColor: 'green',
  },
});
