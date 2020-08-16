import React, { useState, useEffect, Component, } from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  Animated,
  PanResponder,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

import { Input } from 'react-native-elements';

import * as firebaseInfo from './Firebase';




export default class SignUp extends Component {

    constructor() {
        super();

        this.state = {
            email: '',
            password: '',

        }
    }

    render() {
        return (
            <View style={styles.viewContainer}>
                <Image style={styles.yourFoodLogo} source={require('./Images/YFIcon.png')}/>
                <Input style={styles.inputArea} placeholder='email' placeholderTextColor='#ffffff' color='#ffffff' onChangeText={text => this.setState({email: text})} defaultValue={this.state.email}/>
                <Input style={styles.inputArea} placeholder='password' placeholderTextColor='#ffffff' color='#ffffff' onChangeText={text => this.setState({password: text})} defaultValue={this.state.password}/>
                <TouchableOpacity 
                    style={styles.nextButton}
                    onPress ={ () => {
                        firebaseInfo.firebaseApp
                          .auth()
                          .signInWithEmailAndPassword(this.state.email, this.state.password)
                          .then((response) => {
                            const uid = response.user.uid
                            const usersRef = firebaseInfo.firebaseApp.firestore().collection('users')
                            usersRef 
                              .doc(uid)
                              .get()
                              .then(firestoreDocument => {
                                if (!firestoreDocument.exists) {
                                  alert('User not found.')
                                  return;
                                }
                                const user = firestoreDocument.data()
                                this.props.navigation.navigate('Food');
                              })
                              .catch(error => {
                                alert(error)
                              });
                          })
                          .catch(error => {
                            alert(error)
                          });
                    }}>
                    <Text style={styles.loginText}>Login!</Text>
                </TouchableOpacity>
                <View style={styles.signUpView}>
                  <Text style={styles.signUpText}>Don't have an account?</Text>
                  <TouchableOpacity
                    onPress = {() => {
                      this.props.navigation.navigate('SignUp');
                    }}>
                    <Text style={styles.signUpTextButton}> Sign up! </Text>
                  </TouchableOpacity>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        backgroundColor: '#550527',
        alignItems: 'center',
        justifyContent: 'center',
      },
    
    inputArea: {
      padding: 50,
    },


    nextButton: {
        backgroundColor: '#E8AD0A',
        borderRadius: 10,
        margin: 20,
        width: 200,
        height: 50,
        alignItems: 'center',
    },

    loginText: {
        color: '#ffffff',
        padding: 10,
        fontSize: 23,
    },

    signUpView: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },

    signUpText: {
      color: '#ffffff',
      fontSize: 20,
    },

    signUpTextButton: {
      color: '#E8AD0A',
      fontSize: 20,
    },

    yourFoodLogo: {
      width: 200,
      height: 200,
    },
});