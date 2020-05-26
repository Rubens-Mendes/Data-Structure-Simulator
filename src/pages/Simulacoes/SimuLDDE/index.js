import React from 'react';
import {View, Text, TouchableOpacity, TextInput, FlatList, Alert} from 'react-native';
import {ButtonGroup} from 'react-native-elements';

import Styles from '../styles';

import No from '../../../../components/No';
import StepContainer from '../../../../components/StepContainer'
import {Node} from '../../../LDDE';

export default class simuLDDE extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            selectedIndex: -1,
            nodeData: [],
            no: null,
            noInicial: null,
            noFinal: null,
            tamanho: 0,
            texto: "",
            textoStep:"Aguardando Operação...",
        }

        this.updateIndex = this.updateIndex.bind(this)
        this.operacao = this.operacao.bind(this)
        this.insercaoLDDE = this.insercaoLDDE.bind(this)
        this.pegaTexto = this.pegaTexto.bind(this)
        this.remocaoLDDE = this.pegaTexto.bind(this)
    }

    updateIndex (selectedIndex) {
        if(selectedIndex === 0){
            this.setState({textoStep:
                "1.Passo: Criar um nó novo e dar um valor ao mesmo\n" + 
                "2.Passo: Se a lista estiver vazia, o nó passa a ser o início e fim da lista\n" +
                "3.Passo: Senão, percorrer a lista até achar um nó com valor maior e inseri-lo antes dele refazendo os devidos apontamentos\n" +
                "4.Passo: Caso não haja nó com valor maior, inseri-lo na última posição"
            });
        }
        else if(selectedIndex === 1){
            this.setState({textoStep:
                "1.Passo: Fazer uma busca linear para encontrar o valor desejado\n" + 
                "2.Passo: Caso possua mais de um nó na lista, refazer os devidos apontamentos para nós vizinhos\n" +
                "3.Passo: Remover o nó com valor desejado da lista"
            });
        }
        else if(selectedIndex === 2){
            this.setState({textoStep:
                "1.Passo: Usar o primeiro elemento da lista como o inicial\n" + 
                "2.Passo: Percorrer a lista a partir dos sucessores dos nós até encontrar o ó com valor desejado\n" +
                "3.Passo: Retornar o nó encontrado"
            });
        }
        this.setState({selectedIndex})
    }

    operacao() {
        if(this.state.selectedIndex === 0)
            this.insercaoLDDE(Number(this.state.texto))

        else if(this.state.selectedIndex === 1){
            this.remocaoLDDE(Number(this.state.texto))
        }
    }

    pegaTexto(textoDoInput) {
        this.setState({ texto: textoDoInput });
    }

    insercaoLDDE(valor){
        let novoNo = {}
        let nodeData = this.state.nodeData;
        
        let atual = this.state.noInicial;
        let anterior = null;
        let i = 0

        while(atual != null && nodeData[i].value < valor){
            anterior = atual;
            atual = nodeData[atual.proximo];
            i+=1;
        }

        if(anterior) {        
            anterior.proximo = novoNo;
        }
        else
            this.setState({noInicial: novoNo});

        if(atual)
            atual.anterior = novoNo;
        else
            this.setState({noFinal: novoNo});
        
        this.setState({tamanho: this.state.tamanho+=1})

        let No = {index: this.state.tamanho, value: valor, anterior: anterior, proximo: atual}
        let novoData = [...this.state.nodeData, No]

        this.setState({nodeData: novoData});
    }

    remocaoLDDE(valor){
        let atual = this.state.noInicial;
        let anterior = null;
        let novoData = this.state.nodeData;

        for(let i = 0; i < this.state.tamanho && nodeData[i].value != valor; i++){
            anterior = atual;
            atual = nodeData[atual.proximo];
        }

        if(anterior)
            nodeData[atual.anterior].proximo = atual.proximo
        else
            this.state.noInicial = atual.proximo;
        
        if(atual.proximo != 0)
            nodeData[atual.proximo].anterior = anterior
        else
            this.state.noFinal = anterior;

        this.setState({tamanho: this.state.tamanho-=1});

        for (let i =0; i < novoData.length; i++){
            if (novoData[i].valor === atual.valor) {
                novoData.splice(i,1);
                break;
            }
        }

        this.setState({nodeData: novoData});
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
                <StepContainer text={this.state.textoStep}></StepContainer>
            </View>
        );
    }
}