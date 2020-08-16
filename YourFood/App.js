
//import React, { Component } from 'react';
//import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './components/HomeScreen';
import FoodScreen from './components/FoodScreen';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Settings from './components/Settings';
import SelectedFoods from './components/SelectedFoodsScreen';
//import { Header } from 'react-native/Libraries/NewAppScreen';


/*
export default class App extends Component {
  render() {
    return <AppNavigator/>;
  }
}
*/


const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerShown: false,
    },
    
  },

  Food: {
    screen: FoodScreen,
    navigationOptions: {
      headerShown: false,
    }
  },

  SignUp: {
    screen: SignUp,
    navigationOptions: {
      headerShown: false,
    }
  },
  SignIn: {
    screen: SignIn,
    navigationOptions: {
      headerShown: false,
    }
  },

  Settings: {
    screen: Settings,
    navigationOptions: {
      headerShown: false,
    }
  },

  SelectedFoods: {
    screen: SelectedFoods,
    navigationOptions: {
      headerShown: false,
    }
  },

},
  {
    initalRouteName: "Home"

});

const App = createAppContainer(AppNavigator);

export default App;

