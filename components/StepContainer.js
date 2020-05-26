import React from 'react';
import {View, Text} from 'react-native';
import Styles from './styles';

export default class StepContainer extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
        <View style={Styles.stepContainer}>
            <Text style={Styles.stepText}>{this.props.text}</Text>
        </View>
    );
  }
}