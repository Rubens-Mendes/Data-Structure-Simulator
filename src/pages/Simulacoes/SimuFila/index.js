import React from 'react';
import {View, Text, TouchableOpacity, TextInput, FlatList} from 'react-native';
import {ButtonGroup} from 'react-native-elements';

import Styles from '../styles';
import Vetor from '../../../../components/Vetor';
import StepContainer from '../../../../components/StepContainer'

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
            textoStep:"Aguardando Operação...",
            texto: "",
            edit: true,
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
        if(selectedIndex === 0){
            this.setState({textoStep:
                "IMPORTANTE: Primeiro é necessário criar uma fila antes de inserir qualquer valor.\n\n" +
                "1.Passo: Inserir um valor na caixa de texto e confirmar com o botão de \"Ok\" para inserir na fila.\n\n" + 
                "2.Passo: Se a fila estiver cheia, não será possível inserir até que você remova pelo menos um elemento da fila."
                , edit: true});
        }
        else if(selectedIndex === 1){
            this.setState({textoStep:
                "1.Passo: Limpa a posição inicial, removendo seu índice e valor.\n\n" + 
                "2.Passo: Avança a posição inicial para o próximo item da fila.\n\n" +
                "3.Passo: Organiza todos os índices da fila."
                , edit: false, texto: ""});
        }
        else if(selectedIndex === 2){
            this.setState({textoStep:
                "1.Passo: Vai \"desenfileirando\" a fila até encontrar o valor que busca.\n\n" + 
                "2.Passo: Ao encontrar, retorna o valor e o índice do mesmo."
                , edit: true});
        }
        else if(selectedIndex === 3){
            this.setState({textoStep:
                "1.Passo: Determina quantos elementos existirão da fila, sendo no total o valor introduzido + 1 para ter sobra para o sentinela.\n\n" + 
                "2.Passo: Preenche a fila inteira para ela ficar vazia. Dessa forma é possível visualiza-la."
                , edit: true});
        }
        this.setState({selectedIndex})
    }

    operacao() {
        if(!isNaN(Number(this.state.texto))){
            if(this.state.selectedIndex === 0){
                this.enfileira(Number(this.state.texto));
            }
            else if(this.state.selectedIndex === 1){
                this.desenfileira();
            }
            else if(this.state.selectedIndex === 2){
                this.busca(Number(this.state.texto));
            }
            else if(this.state.selectedIndex === 3){
                this.criaFila(Number(this.state.texto));
            }
        }
        else{
            alert("Por favor, insira um número.")
        }
    }

    enfileira(valor){
        if( (this.state.f+1) % (this.state.max+1) == this.state.i || this.state.max == 0){
            return false;
        }

        this.setState({total: this.state.total+=1});
        this.state.v[this.state.f] = {value: valor, index: this.state.total};

        this.state.f = (this.state.f+1) % (this.state.max+1);

        return true;
    }

    desenfileira(){
        if(this.state.i == this.state.f || this.state.max == 0){
            return this.state.v[0];
        }

        let temp = this.state.v[this.state.i];

        this.state.v[this.state.i].index = String.fromCharCode(this.state.i+65);
        this.state.v[this.state.i].value = " ";
        this.state.i = (this.state.i+1) % (this.state.max+1);
        this.setState({total: this.state.total-=1});
        this.organizaIndex();
        return temp;
    }

    organizaIndex(){
        let tempI = this.state.i;

        while(tempI != this.state.f){
            this.state.v[tempI].index-=1;
            tempI = (tempI+1) % (this.state.max+1);
        }
    }

    criaFila(valor){
        let novo = []
        for(let i = 0; i < valor+1; i++){
            novo[i] = {value: " ", index: String.fromCharCode(i+65)};
        }
        this.setState({max: valor, v: novo, i: 0, f: 0, total: 0});
    }

    busca(valor){

        if (this.state.max == 0){
            return;
        }

        let tempI = this.state.i;

        while(tempI != this.state.f){
            if(this.state.v[tempI].value == valor){
                alert(String(valor) + " ENCONTRADO NO INDEX " + String(this.state.v[tempI].index) + " DA FILA. ");
                return;
            }
            tempI = (tempI+1) % (this.state.max);
        }

        alert("VALOR NÃO ENCONTRADO.");
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
                    <TextInput style={Styles.input} onChangeText={this.pegaTexto} editable={this.state.edit} value = {this.state.texto}></TextInput>
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
                                <Vetor value={item.value} index={item.index}></Vetor>
                            );
                          }
                        }
                        />
                </View>
                <StepContainer text={this.state.textoStep}></StepContainer>
            </View>
        );
    }
}