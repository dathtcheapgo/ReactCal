import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button
} from 'react-native';
import SegmentedControlTab from 'react-native-segmented-control-tab'
export default class Cal extends Component {
  constructor(props){
    super(props);
    this.state = {
      segmentSelectedIndex : 0,
      billAmount: 0
    }

  }
  handleSegmentChange(index){
    this.setState({
      segmentSelectedIndex : index

    })

    this.handleBillAmountChange(this.state.billAmount, index)
  }

  handleBillAmountChange(bill,index){
    this.setState({
      billAmount : bill

    })
    if (!index && index != 0){
      index = this.state.segmentSelectedIndex;
    }
    bill = parseFloat(bill);
    var percent = this.segmentValues()[index]; // 10%, 15%, 50%
    percent = parseFloat(percent)/100; // 0.1, 0.15, 0.5

    var result = bill + (bill * percent);

    this.setState({
      result: result,
      tipAmmount: bill * percent


    })
  }

  segmentValues(){

    return ["10%","15%","50%"];
  }
  render(){
    return(
      <View style={{marginTop:50,padding:10}}>

          <View>
            <Text>Tip Calculator</Text>
          </View>
          <View >
            <Text>Bill Amount</Text>
            <TextInput
              style={{ height:60 }}
              autoFocus= {true}
              onChangeText={(billAmount) => this.handleBillAmountChange(billAmount)}

            />
          </View>

          <View>
            <Text>Tip Ammount: 0</Text>
          </View>

          <View>
          <SegmentedControlTab
                  values={this.segmentValues()}
                  onTabPress= {index => this.handleSegmentChange(index)}
                  />
          </View>

          <View>
            <Text>Bill input: {this.state.billAmount}</Text>
            <Text>Tip Ammount: {this.state.tipAmmount}</Text>
            <Text>Segment control: {this.segmentValues()[this.state.segmentSelectedIndex]}</Text>
          </View>

          <View>
            <Text>Result: {this.state.result}</Text>
          </View>
      </View>



    );

  }

}
module.exports = Cal
