import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableOpacity,
  AsyncStorage
} from 'react-native';
import CustomNavBar from './customnavbar.js';
import Calculator from  './calculator.js';
import Settings from './settings.js';
export default class PowerRanger extends Component {

  constructor(props){
    super(props);
    this.state = {
      sceneTransition: ""
    }

  }

 render(){
   return (
     <Navigator
         initialRoute={{id: 'CalculatorPage'}}
         renderScene={this.renderScene.bind(this)}
        //  configureScene={(route) => {
        //    if (route.sceneConfig) {
        //      return route.sceneConfig;
        //    }
        //    return Navigator.SceneConfigs.FloatFromRight;
        //  }}
         navigationBar={CustomNavBar}
         configureScene={this.configureScene.bind(this)}
        />
   );
 }
 // To navigate to page based on page ID
  renderScene(route, navigator) {
    if(route.id == 'CalculatorPage') {
    return (
      <Calculator navigator={navigator}/>
    );
    } else {
    return (

      <Settings navigator={navigator}/>
    );

  }
  }
  async getSceneTransition(){
    try{
      let sceneTransitionValue = await AsyncStorage.getItem('@MySuperStore:key');
      // Store value to State
      this.setState({
        sceneTransition : sceneTransitionValue
      });
    }catch(error){
      console.log("Hmm, something when wrong when get data..." + error);
    }
  }

  // config scene transition, change scene transition based on Setting
  configureScene(route, routeStack){
    //@Todo, change to scene transition from Asynstorage vale
    console.log("transition style is "+this.state.sceneTransition)
    AsyncStorage.getItem('@MySuperStore:key',(error,result) => {
      this.setState ({
        sceneTransition: result
      });

    });
    console.log("async transition style is "+this.state.sceneTransition)
    switch (this.state.sceneTransition) {
      case 'FloatFromRight':
        return Navigator.SceneConfigs.FloatFromRight;
        break;
      case 'FloatFromLeft':
        return Navigator.SceneConfigs.FloatFromLeft;
        break;
        case 'FloatFromBottom':
          return Navigator.SceneConfigs.FloatFromBottom;
          break;
          case 'FloatFromBottomAndroid':
            return Navigator.SceneConfigs.FloatFromBottomAndroid;
            break;
            case 'SwipeFromLeft':
              return Navigator.SceneConfigs.SwipeFromLeft;
              break;
              case 'HorizontalSwipeJump':
                return Navigator.SceneConfigs.HorizontalSwipeJump;
                break;
                case 'HorizontalSwipeJumpFromRight':
                  return Navigator.SceneConfigs.HorizontalSwipeJumpFromRight;
                  break;
      default:
      return Navigator.SceneConfigs.FloatFromBottom;
      break;
    }
  }
}
module.exports = PowerRanger
