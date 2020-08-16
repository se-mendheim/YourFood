import React, { Component } from 'react';
import { Button, View, Text, StyleSheet, ImageBackground } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';


const info = ['Welcome to Your Food! This app is designed to see what foods you enjoy and find the best recipies and healthy eating habits with those foods! The rules are simple, swipe right if you enjoy the food, swipe left if you don\'t. Whatever foods you like Your Food will take into consideration and tailor the recipes and diets to what you like! Have fun swiping!',
              'Your data is useful to us. With your data we can help find out the best foods, resteraunts, recipes and other food related things to make your life easier. Your Food uses your preferences to help tailor the experience to make it more personal for you!',
              'Food should be something fun for everyone to enjoy! Your Food turns deciding what to eat into a fun and enjoyable experience for everyone. With each completion of a level you will get rewards and perks to use in a various number of ways. By using Your Food you can make choosing food fun!',
              '',
              '',
              '',
            ];

export default class HomeScreen extends Component {
    constructor() {
        super();


        this.state = {
            infoIndex: 0,
        };
    }

    changeScene() {
        
    }

    render() {
        return (
            <View style={styles.viewContainer}>

                <View style={styles.textBox}>
                    <ScrollView>
                        <Text style={styles.aboutText}>
                            {info[this.state.infoIndex]}
                        </Text>
                    </ScrollView>
                </View>

                <TouchableOpacity 
                    style={styles.nextButton}
                    onPress={() => {
                        if (this.state.infoIndex == 2) {
                            this.props.navigation.navigate('Food');
                        }
                        else {
                            this.setState({ infoIndex: this.state.infoIndex + 1})
                        }
                    }}>
                    <Text style={styles.aboutText}>Continue</Text>
                </TouchableOpacity>
                
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

    textBox: {
        backgroundColor: '#C05746',
        width: 300,
        height: 500,
        borderRadius: 40,
    },

    scrollTextBox: {
        alignItems: 'center',

    },

    aboutText: {
        color: '#ffffff',
        padding: 20,
        fontSize: 23,
    },

    nextButton: {
        backgroundColor: '#E8AD0A',
        borderRadius: 20,
        margin: 20,
        width: 200,
        alignItems: 'center',
    },
  });