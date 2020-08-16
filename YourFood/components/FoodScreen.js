import React, { Component, } from 'react';

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

import 'react-native-gesture-handler';

import * as firebaseInfo from './Firebase';

const likedFoods = [];
const dislikedFoods = [];

const diffFoods = ["generic","meats","veggies"];


const fbdb = firebaseInfo.firebaseApp.database();


export default class FoodScreen extends Component {
  

    constructor() {
        super();

        this.state = {
            foodItems: {},
            listFoods: new Map(),
            images: [],
            descriptions: [],
            foodIndex: 0,
            typeFood: 0,
            checkLevel: 0,
            nextButton: false,
            screenElements: true,
            
        };
    }

    componentDidMount() {
        this.getData();

    }


    getData() {
        console.log(this.state.typeFood);

        fbdb.ref('/food/' + diffFoods[this.state.typeFood]).once('value').then(snapshot => {
            this.setState({ foodItems: snapshot.val(), });

            this.setState({listFoods: getFoods(this.state.foodItems) });

            this.setState({ images: getImages(this.state.listFoods) });
            this.setState({ descriptions: getDescriptions(this.state.listFoods) })

        });

        var getImages = function(prop) {
            var imageLinks = [];
            for (let [key, value] of prop) {
            var imageLink = (prop.get(key))[0];
            imageLinks.push(imageLink);
            }
            return imageLinks;
        }

        var getDescriptions = function(prop) {
            var descriptions = [];
                for (let [key, value] of prop) {
                var description = (prop.get(key))[1];
                descriptions.push(description);
                }
            return descriptions;
        }

        var getFoods = function(obj) {
            var foods = new Map();
            for (var key in obj) {
                //for (var item in key) {
                    //foods.set(key, array);
                //}
                foods.set(key, obj[key]);
            }
            return foods;
        }    
    }

    pan = new Animated.ValueXY();

    panResponder = PanResponder.create({
        onMoveShouldSetPanResponder: () => true,
        onPanResponderGrant: () => {
            this.pan.setOffset({
              x: this.pan.x._value,
              y: this.pan.y._value,
            });
          },
          

        onPanResponderMove: Animated.event([
            null, 
            { dx: this.pan.x, dy: this.pan.y, }
        ]),



        onPanResponderRelease: (evt, gestureState) => {
            //Animated.spring(this.pan, { toValue: {x: 0, y: 0}}).start();

            if (gestureState.dx > 120) {
                if (this.state.foodIndex < (this.state.images.length-1)) {
                    this.setState({ foodIndex: this.state.foodIndex + 1});
                }

                likedFoods.push(this.state.images[this.state.foodIndex]);
                
                if (this.state.checkLevel == this.state.images.length-1) {
                    this.setState({screenElements: false});
                    this.setState({nextButton: true});
                }

                this.setState({checkLevel: this.state.checkLevel + 1});

                //Animated.spring(this.pan, { toValue: {x: 0, y: 0}}).start();
            }
            else if (gestureState.dx < -120) {
                if (this.state.foodIndex < (this.state.images.length-1)) {
                    this.setState({ foodIndex: this.state.foodIndex + 1});
                }

                dislikedFoods.push(this.state.images[this.state.foodIndex]);
                
                if (this.state.checkLevel == this.state.images.length-1) {
                    this.setState({screenElements: false});
                    this.setState({nextButton: true});
                }

                this.setState({checkLevel: this.state.checkLevel + 1});

                //Animated.spring(this.pan, { toValue: {x: 0, y: 0}}).start();
            }


            Animated.spring(this.pan, { toValue: {x: 0, y: 0}}).start();
        }
    });    

    
    

    render() {
        return (
            <View style={styles.viewContainer}>
                <View style={styles.topBar}>
                    <TouchableOpacity style={[styles.imageButtonTouch, {marginRight: 190}]}
                        onPress={() => this.props.navigation.navigate('Settings')}
                    >
                        <Image style={styles.imageButton} source={require('./Images/settings.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.imageButtonTouch]}
                        onPress={() => this.props.navigation.navigate('SelectedFoods')}
                    >
                        <Image style={styles.imageButton} source={require('./Images/foodbasket.png')}/>
                    </TouchableOpacity>
                </View>
                { this.state.screenElements ?
                    <View style={styles.viewContainer}>
                        <Animated.View
                            style={{
                                transform: [{ translateX: this.pan.x }]
                            }}
                            {...this.panResponder.panHandlers}>
                            <Image style={styles.foodImage} source={{uri: this.state.images[this.state.foodIndex]}} /> 
                        </Animated.View>

                        <View style={styles.foodDescContainer}>
                            <Text style={styles.foodDescText}> { this.state.descriptions[this.state.foodIndex]} </Text>
                        </View>
                    </View>
                    : null
                }
                { this.state.nextButton ? 
                    <TouchableOpacity 
                        style={styles.nextButton}
                        onPress={() => {
                            this.setState({typeFood: this.state.typeFood + 1});
                            this.setState({foodIndex: 0});
                            this.setState({checkLevel: 0});
                            this.getData();
                            this.setState({screenElements: true});
                            this.setState({nextButton: false});
                            }
                        }>
                        <Text style={styles.continueText}>Next Level</Text>
                    </TouchableOpacity>: null
                }
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

    topBar: {
        flex: .3,
        flexDirection: 'row',
        backgroundColor: '#550527',
        alignItems: 'center',
        justifyContent: 'center',
        height: 5,
    },

    imageButtonTouch: {
        justifyContent: 'space-between',
        width: 75,
        height: 75,
        borderRadius: 30,
    },  

    imageButton: {
        width: 75,
        height: 75,
        borderRadius: 30,
    },

    foodDescContainer: {
        margin: 20,
        backgroundColor: "#C05746",
        color: "#000000",
    },

    brandText: {
        fontSize: 50,
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontFamily: 'ChalkboardSE-Bold',
    },

    foodDescText: {
        fontSize: 20,
        color:'#FFFFFF',
        fontFamily:'Times New Roman',
        padding: 20,
    },

    foodImage: {
        height: 275,
        width: 275,
        backgroundColor: "#C05746",
        borderRadius: 30,
    },

    nextButton: {
        backgroundColor: '#E8AD0A',
        borderRadius: 20,
        margin: 20,
        width: 200,
        height: 50,
        alignItems: 'center',
    },

    continueText: {
        color: '#ffffff',
        padding: 20,
        fontSize: 23,
    },

  });