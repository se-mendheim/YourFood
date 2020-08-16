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
  Switch,
} from 'react-native';

import RNPickerSelect from 'react-native-picker-select';

//import { Input } from 'react-native-elements';



export default class Settings extends Component {
    constructor() {
        super();

        this.state = {
            switchValue: false,
        }
    }

    toggleSwitch = (value) => {
        this.setState({switchValue: value})
    }

    render() {
        return(
            <View style={styles.viewContainer}>
                <View>
                    <Text style={styles.accountText}>MY ACCOUNT</Text>
                </View>
                
                <View style={styles.textElements}>
                    <Text style={styles.text}>username:</Text>
                    <Text style={styles.text}>...</Text>
                </View>
                <View style={styles.textElements}>
                    <Text style={styles.text}>email:</Text>
                    <Text style={styles.text}>...</Text>
                </View>
                
                <Text style={styles.privacyText}>PRIVACY</Text>
                <View>
                    <RNPickerSelect 
                        style={ pickerStyle }
                        onValueChange={(value) => console.log(value)}
                        items={[
                            { label: 'No DATA shared', value: 'no data' },
                            { label: 'Some DATA shared', value: 'some data' },
                            { label: 'All DATA shared', value: 'all data' },
                        ]}
                    />
                </View>

                <Text style={styles.notificationText}>NOTIFICATIONS</Text>
                <View style={styles.textElements}>
                    <Text style={{color: '#fff', fontSize: 20, paddingRight: 20,}}>Allow Notifications</Text>
                    <Switch
                        onValueChange = {this.toggleSwitch}
                        value = {this.state.switchValue}
                    />
                </View>

                <TouchableOpacity style={styles.nextButton}
                    onPress={() => this.props.navigation.navigate('Food')}
                >
                    <Text>Food Screen</Text>
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

    textElements: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    }, 

    text: {
        fontSize: 20,
        paddingLeft: 80,
        paddingRight: 80,
        color: '#fff',
    },

    titleContainer: {
        justifyContent: 'flex-start',
    },

    accountText: {
        color: '#E8AD0A',
        fontSize: 40,
        paddingRight: 80,
        marginTop: 15,
        marginBottom: 15,
    },

    privacyText: {
        color: '#E8AD0A',
        fontSize: 40,
        paddingRight: 180, 
        marginTop: 15,
        marginBottom: 15,
    },

    notificationText: {
        color: '#E8AD0A',
        fontSize: 40,
        paddingRight: 60,
        marginTop: 15,
        marginBottom: 15,
    },

    nextButton: {
        backgroundColor: '#E8AD0A',
        borderRadius: 20,
        margin: 20,
        width: 200,
        alignItems: 'center',
    },


});

const pickerStyle = {
    inputIOS: {
        color: '#fff',
        fontSize: 30,
    },

    inputAndroid: {
        color: '#fff',
        fontSize: 30,
    },

    placeholderColor: '#fff',
    underline: { borderTopWidth: 0 },


};