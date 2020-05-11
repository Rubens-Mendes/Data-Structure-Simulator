import React from 'react';
import {View, Text, TouchableOpacity, TextInput, Button} from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import { RFValue } from "react-native-responsive-fontsize";


import Styles from './styles';
import globalStyles from '../../../../globalStyles';
import { useNavigation } from '@react-navigation/native';
import { TouchableHighlight } from 'react-native-gesture-handler';

export default class simuLDDE extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data: [{
              label: 'Insere',
              value: 'Insere',
            }, 
            {
              label: 'Remove',
              value: 'Remove',
            }, 
            {
              label: 'Busca',
              value: 'Busca',
            }],
            value: '',
            label: 'Operação'
        }
    }

    /*componentDidMount() {
        const value = this.state.data[0].value;
        this.setState({ value });
    }*/

    render(){
        return(
            <View style={Styles.container}>
                <View style={Styles.action}>
                    <Dropdown
                        value={this.state.label}
                        data={this.state.data}
                        pickerStyle={Styles.dropdownPicker}
                        dropdownOffset={{ 'top': 0 }}
                        containerStyle = {Styles.dropdown}
                        textColor = {'#BCCCC2'}
                        baseColor = {'#BCCCC2'}
                        itemColor = {'#BCCCC2'}
                        fontSize = {RFValue(22)}
                        onChangeText={(value)=> {this.setState({ value });}}
                    />
                    <TextInput style={Styles.input}></TextInput>
                    <TouchableOpacity style = {Styles.okButton}>
                        <Text style={Styles.okText}>OK</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}