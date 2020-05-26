import React from 'react';
import {View, Text, TouchableOpacity, TextInput, FlatList} from 'react-native';
import {ButtonGroup} from 'react-native-elements';

import Styles from '../styles';
import No from '../../../../components/No';

export default class simuFila extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            selectedIndex: -1,
            textoStep:"Aguardando Operaç?o...",
        }

        this.updateIndex = this.updateIndex.bind(this)
        this.operacao = this.updateIndex.bind(this)
        this.pegaTexto = this.pegaTexto.bind(this)
    }

    updateIndex (selectedIndex) {
        this.setState({selectedIndex})
    }

    operacao() {
        if(this.state.selectedIndex === 0)
            this.insercaoLDDE(Number(this.state.texto))
        else if(this.state.selectedIndex === 1)
            this.remocaoLDDE(Number(this.state.texto))
    }

    pegaTexto(textoDoInput) {
        this.setState({ texto: textoDoInput });
    }

    render(){
        const buttons = ['Inserir', 'Remover', 'Buscar']
        const { selectedIndex } = this.state

        return(
            <View style={Styles.container}>
                <View style ={Styles.actionContainer}>
                    <View style={Styles.inputBar}>
                        <TextInput style={Styles.input} onChangeText={this.pegaTexto}></TextInput>
                        <TouchableOpacity style = {Styles.okButton} onPress={this.operacao}>
                            <Text style={Styles.okText}>OK</Text>
                        </TouchableOpacity>
                    </View>
                    <ButtonGroup
                            onPress={this.updateIndex}
                            selectedIndex={selectedIndex}
                            buttons={buttons}
                            containerStyle={Styles.buttonsContainer}
                            buttonStyle={Styles.actionButton}
                            selectedButtonStyle={Styles.SelectedButton}
                            textStyle={Styles.okText}
                        />
                </View>
                <View style={Styles.simulationContainer}>
                    <FlatList 
                        horizontal
                        data={this.state.nodeData}
                        keyExtractor={item => item.index.toString()}
                        renderItem={({ item }) => {
                            return (
                                <No value={item.value} index={item.index}></No>
                            );
                          }
                        }
                        />
                </View>
                <View style={Styles.stepContainer}></View>
            </View>
        );
    }
}