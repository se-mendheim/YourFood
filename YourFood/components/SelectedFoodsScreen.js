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




export default class SelectedFoods extends Component {
    constructor() {
        super();

        this.state = {

        };
    }

    render() {
        return(
            <View style={{flex: 1, backgroundColor: '#550527', alignItems: 'center', justifyContent: 'center',}}>
                <Text style={{color: '#fff'}}>Not yet implemented</Text>
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
    nextButton: {
        backgroundColor: '#E8AD0A',
        borderRadius: 20,
        margin: 20,
        width: 200,
        alignItems: 'center',
    },
});