import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Picker,
  AsyncStorage,
  Navigator
} from 'react-native';
export default class Settings extends Component {

  constructor(props){
    super(props);
    this.state = {
      scene : 0,
      sceneTransition: ""
    }

  }

  setSelectSceneTransition(scene){
    try {
      this.setSceneTransition(scene);
      this.setState({
        scene: scene
      });
    } catch (error) {
      console.log("Oop!! Something went wrong !!!" + error);
    }
  }

  async setSceneTransition(scene){
    try{
      await AsyncStorage.setItem('@MySuperStore:key', scene);
      this.setState({
        sceneTransition : scene

      })
    }catch(error){
       console.log("Hmm, something when wrong when set data..." + error);
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

  componentDidMount(){
    this.getSceneTransition();
  }

  getTransitionStyle(){
    return this.state.sceneTransition

  }

  render(){
    return(
         <View style={{marginTop:50,padding:10}}>
           <View>
             <Text style={{fontSize:25}}>Scene Transitions</Text>
             <Picker
               selectedValue={this.state.sceneTransition}
               onValueChange={(scene) => this.setSelectSceneTransition(scene)}>
               <Picker.Item label="FloatFromRight" value="FloatFromRight" />
               <Picker.Item label="FloatFromLeft" value="FloatFromLeft" />
               <Picker.Item label="FloatFromBottom" value="FloatFromBottom" />
               <Picker.Item label="FloatFromBottomAndroid" value="FloatFromBottomAndroid" />
               <Picker.Item label="SwipeFromLeft" value="SwipeFromLeft" />
               <Picker.Item label="HorizontalSwipeJump" value="HorizontalSwipeJump" />
               <Picker.Item label="HorizontalSwipeJumpFromRight" value="HorizontalSwipeJumpFromRight" />
             </Picker>
           </View>
         </View>
       );

  }

}
module.exports = Settings
