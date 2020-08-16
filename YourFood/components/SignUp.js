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
            username: '',
            email: '',
            password: '',

        }
    }

    render() {
        return (
            <View style={styles.viewContainer}>
                <Image style={styles.yourFoodLogo} source={require('./Images/YFIcon.png')}/>
                <Input style={styles.inputArea} placeholder='username' placeholderTextColor='#ffffff' color='#ffffff' onChangeText={text => this.setState({username: text})} defaultValue={this.state.username}/>
                <Input style={styles.inputArea} placeholder='email' placeholderTextColor='#ffffff' color='#ffffff' onChangeText={text => this.setState({email: text})} defaultValue={this.state.email}/>
                <Input style={styles.inputArea} placeholder='password' placeholderTextColor='#ffffff' color='#ffffff' onChangeText={text => this.setState({password: text})} defaultValue={this.state.password}/>
                <TouchableOpacity 
                    style={styles.nextButton}
                    onPress ={ () => {
                        var email = this.state.email;
                        var username = this.state.username;
                        firebaseInfo.firebaseApp
                        .auth()
                        .createUserWithEmailAndPassword(email, username)
                        .then((response) => {
                            const uid = response.user.uid
                            const data = {
                                id: uid,
                                email,
                                username,
                            };
                            const usersRef = firebaseInfo.firebaseApp.firestore().collection('users')
                            usersRef
                                .doc(uid)
                                .set(data)
                                .then(() => {
                                    this.props.navigation.navigate('Food');
                                })
                                .catch((error) => {
                                    alert(error)
                                });
                        })
                        .catch((error) => {
                            alert(error)
                        });
                    }}>
                    <Text style={styles.signUpText}>Sign Up!</Text>
                </TouchableOpacity>
                <View style={styles.loginView}>
                  <Text style={styles.loginText}>Already have an account?</Text>
                  <TouchableOpacity
                    onPress = {() => {
                      this.props.navigation.navigate('SignIn');
                    }}>
                    <Text style={styles.loginTextButton}> Sign in! </Text>
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

    signUpText: {
        color: '#ffffff',
        padding: 10,
        fontSize: 23,
    },

    loginView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    loginText: {
        color: '#ffffff',
        fontSize: 20,
    },

    loginTextButton: {
        color: '#E8AD0A',
        fontSize: 20,
    },

    yourFoodLogo: {
        width: 200,
        height: 200,
    },
});