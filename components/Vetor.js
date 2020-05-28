import React from 'react';
import {View, Text} from 'react-native';
import Styles from './styles';

export default class No extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
        <View style={Styles.containerNo}>
            <View style={Styles.vetor}>
                <Text style={Styles.valueNo}>{this.props.value}</Text>
            </View>
            <Text style={Styles.indexNo}>{this.props.index}</Text>
        </View>
    );
  }
}