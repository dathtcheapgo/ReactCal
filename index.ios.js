/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import Settings from './Apps/settings.js';
import Calculator from './Apps/calculator.js';
import PowerRanger from './Apps/powerranger.js';
// import CustomNavBar from './Apps/customNavBar.js';
export default class AwesomeProject extends Component {
  render() {
    return (
      // <Calculator />
      // <Settings />
      <PowerRanger />
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
