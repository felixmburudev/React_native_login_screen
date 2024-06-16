import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Example with FontAwesome, but you can use other icon sets

export default function App() {
  const login = () => {
    alert("dashboard");
  };

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Text style={styles.logoText}>FI</Text>
      </View>
      <Text style={styles.welcomeText}>Welcome to Fiverr</Text>
      <Text style={styles.infoText}>Please enter your credentials below</Text>
      <TextInput style={styles.email} placeholder='Email or username' />
      <TextInput style={styles.email} placeholder='Password' />
      <TouchableOpacity style={styles.loginBtn} onPress={login}>
        <Text style={styles.btnText}>Login</Text>
      </TouchableOpacity>
      <Text style={styles.orText}>Or via social network</Text>
      <View style={styles.socialIcons}>
        <TouchableOpacity style={styles.iconContainer}>
          <Icon name="facebook-square" size={30} color="#3b5998" />
          
          <Text style={styles.socialText}>Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer}>
          <Icon name="google" size={30} color="#db4437" />
          <Text style={styles.socialText}>Google</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 20,
    backgroundColor: '#1b1b1f',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    backgroundColor: '#0abf61',
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 50,
  },
  welcomeText: {
    color: 'white',
    fontSize: 40,
    marginTop: 20,
  },
  infoText: {
    color: 'white',
    fontSize: 20,
    marginTop: 10,
  },
  email: {
    height: 55,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    color: 'grey',
    width: '90%',
    paddingLeft: 20,
    marginTop: 10,
  },
  loginBtn: {
    height: 50,
    width: '90%',
    backgroundColor: '#0abf61',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  btnText: {
    color: 'white',
    fontSize: 20,
  },
  orText: {
    color: 'white',
    textAlign: 'center',
    marginTop: 20,
  },
  socialIcons: {
    // display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 20,
    width: "90%",
    height: 50,
  },
  iconContainer: {
    marginHorizontal: 10,
    borderRadius: 10,
    borderColor: 'white',
    alignItems: 'center',
    borderWidth: 0.5,
    flexDirection: 'row',
    width: '40%',
    height: 50,
    justifyContent: 'center',

  },
  socialText:{
    color: "white",
    fontSize: 15,
  }
});