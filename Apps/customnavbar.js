import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Navigator,
  TouchableOpacity
} from 'react-native';

// Defined controls
var NavigationBarRouteMapper = {
  LeftButton: (route, navigator, index, navState) =>{
    return
  },
  RightButton: (route, navigator, index, navState) => {
    if(route.id != 'CalculatorPage'){
      return (
        <TouchableOpacity style={stylesCSS.tabbarHeadr} onPress={() => navigator.pop()}>
          <Text>Save</Text>
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity style={stylesCSS.tabbarHeadr} onPress={() => navigator.push({id: 'SettingPage'})}>
          <Text style={stylesCSS.headerFontSize}>Setting</Text>
        </TouchableOpacity>
      );
    }
  },
  Title: (route, navigator, index, navState) => {
    return(<Text style={[stylesCSS.navigationBarText,stylesCSS.navigationBarTitle]}>{route.id}</Text>);
  },
  }
  const stylesCSS = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    navigationBarText:{
      color: 'white',
      padding: 10,
      fontSize: 15
    },
    navigationBarTitle: {
      paddingTop: 5,
      fontSize: 20
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
    tabbarHeadr: {

    },
    headerFontSize: {
      fontSize: 14,

    }
  });

// export this component
module.exports = (
  <Navigator.NavigationBar
    routeMapper={NavigationBarRouteMapper}
    style = {{backgroundColor: 'blue'}} />
)
