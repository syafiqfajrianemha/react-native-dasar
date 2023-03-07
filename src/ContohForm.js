import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {Component} from 'react';

export default class ContohForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      isLogin: false,
    };
  }

  login = () => {
    if (!this.state.username && !this.state.password) {
      Alert.alert('Error', 'Username atau Password Harus Diisi!');
    } else {
      this.setState({
        isLogin: true,
      });
    }
  };

  render() {
    const {username, password, isLogin} = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Belajar Membuat Form</Text>
        <Text style={styles.garis} />

        {/* isi */}
        <View style={styles.isi}>
          <View>
            <Text>Username :</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Masukan username"
              value={username}
              onChangeText={username => this.setState({username})}
            />
          </View>
          <View>
            <Text>Password :</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Masukan password"
              value={password}
              onChangeText={password => this.setState({password})}
              secureTextEntry={true}
            />
          </View>

          <TouchableOpacity style={styles.button} onPress={() => this.login()}>
            <Text style={styles.textButton}>LOGIN</Text>
          </TouchableOpacity>

          {isLogin && (
            <Text style={{marginTop: 20}}>
              Selamat Anda Berhasil Login Sebagai : {username}
            </Text>
          )}
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
  textInput: {
    borderWidth: 1,
    padding: 10,
    borderColor: 'grey',
    borderRadius: 5,
    height: 40,
    marginBottom: 15,
  },
  button: {
    backgroundColor: 'skyblue',
    padding: 10,
    borderRadius: 5,
  },
  textButton: {
    textAlign: 'center',
    color: 'black',
  },
});
