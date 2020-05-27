import React from 'react';
import {View, Text, TouchableOpacity, TextInput, FlatList} from 'react-native';
import {ButtonGroup} from 'react-native-elements';

import Styles from '../styles';
import No from '../../../../components/No';

export default class simuFila extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            max: 0,
            v: [],
            i: 0,
            f: 0,
            total: 0,
            selectedIndex: -1,
            //textoStep:"Aguardando Operaç?o...",
            texto: "",
        }

        this.updateIndex = this.updateIndex.bind(this);
        this.operacao = this.operacao.bind(this);
        this.pegaTexto = this.pegaTexto.bind(this);
        this.enfileira = this.enfileira.bind(this);
        this.desenfileira = this.desenfileira.bind(this)
        this.organizaIndex = this.organizaIndex.bind(this)
        this.busca = this.busca.bind(this)
        this.criaFila = this.criaFila.bind(this)
    }

    updateIndex (selectedIndex) {
        this.setState({selectedIndex});
    }

    operacao() {
        if(this.state.selectedIndex === 0)
            this.enfileira(Number(this.state.texto));
        else if(this.state.selectedIndex === 1)
            this.desenfileira();
        else if(this.state.selectedIndex === 2)
            this.busca(Number(this.state.texto));
        else if(this.state.selectedIndex === 3)
            this.criaFila(Number(this.state.texto));
    }

    enfileira(valor){
        if( (this.state.f+1) % (this.state.max) == this.state.i ){
            return false;
        }

        this.setState({total: this.state.total+=1});
        this.state.v[this.state.f] = {value: valor, index: this.state.total};

        this.state.f = (this.state.f+1) % (this.state.max);

        return true;
    }

    desenfileira(){
        if(this.state.i == this.state.f){
            return this.state.v[0];
        }

        let temp = this.state.v[this.state.i];

        this.state.v[this.state.i].index = String.fromCharCode(this.state.i+65);
        this.state.v[this.state.i].value = " ";
        this.state.i = (this.state.i+1) % (this.state.max);
        this.setState({total: this.state.total-=1});
        this.organizaIndex();
        return temp;
    }

    organizaIndex(){
        let tempI = this.state.i;

        while(tempI != this.state.f){
            this.state.v[tempI].index-=1;
            tempI = (tempI+1) % (this.state.max);
        }
    }

    criaFila(valor){
        let novo = []
        for(let i = 0; i < valor; i++){
            novo[i] = {value: " ", index: String.fromCharCode(i+65)};
        }
        this.setState({max: valor, v: novo, i: 0, f: 0, total: 0});
    }

    busca(valor){
        let tempI = this.state.i;

        while(tempI != this.state.f){
            if(this.state.v[tempI].value == valor){
                alert(String(valor) + " ENCONTRADO NO INDEX " + String(tempI+1) + " DA FILA. ");
                break;
            }
            tempI = (tempI+1) % (this.state.max);
        }

        alert("VALOR N?O ENCONTRADO.");
    }

    pegaTexto(textoDoInput) {
        this.setState({ texto: textoDoInput });
    }

    render(){
        const buttons = ['Inserir', 'Remover', 'Buscar', 'Cria Fila']
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
                        data={this.state.v}
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