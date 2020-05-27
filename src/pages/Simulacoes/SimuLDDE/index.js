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
            no: undefined,
            noInicial: undefined,
            noFinal: undefined,
            tamanho: 0,
            texto: "",
            textoStep:"Aguardando Operação...",
        }

        this.updateIndex = this.updateIndex.bind(this);
        this.operacao = this.operacao.bind(this);
        this.insercaoLDDE = this.insercaoLDDE.bind(this);
        this.pegaTexto = this.pegaTexto.bind(this);
        this.remocaoLDDE = this.remocaoLDDE.bind(this);
        this.buscaLDDE = this.buscaLDDE.bind(this);
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
        if(this.state.selectedIndex === 0){
            this.insercaoLDDE(Number(this.state.texto));
        }
        else if(this.state.selectedIndex === 1){
            this.remocaoLDDE(Number(this.state.texto));
        }
        else if(this.state.selectedIndex === 2){
            this.buscaLDDE(Number(this.state.texto));
        }

    }

    pegaTexto(textoDoInput) {
        this.setState({ texto: textoDoInput });
    }

    insercaoLDDE(valor){
        
        let proximo = this.state.noInicial;
        let anterior = undefined;
        let i = 0;

        while(proximo != undefined && proximo.value < valor){
            anterior = proximo;
            proximo = proximo.proximo;
            i = i + 1;
        }

        this.setState({tamanho: this.state.tamanho+=1});
        let novoNo = {index: i, value: valor, anterior: undefined, proximo: undefined};

        if(anterior){
            novoNo.anterior = anterior;
            anterior.proximo = novoNo;
        }

        else
            this.setState({noInicial: novoNo});

        if(proximo)
            proximo.anterior = novoNo;

        else
            this.setState({noFinal: novoNo});

        novoNo.proximo = proximo;

        while(proximo !== undefined){
            proximo.index+=1;
            proximo = proximo.proximo;
        }
        
        let novoData = [];

        let counter = 0

        while(counter != this.state.tamanho){
            if (counter == i){
                novoData = [...novoData, novoNo];
            }

            else if(counter < i){
                novoData = [...novoData, this.state.nodeData[counter]];
            }

            else{
                novoData = [...novoData, this.state.nodeData[counter - 1]];
            }
        
            counter+=1;
        }

        this.setState({nodeData: novoData});
        
    }

    remocaoLDDE(valor){

        let atual = {};
        let proximo = this.state.noInicial;
        let anterior = this.state.noFinal;

        if(valor - this.state.noInicial.value > this.state.noFinal.value - valor){
            let i = this.state.tamanho - 1;

            while(anterior != undefined && anterior.value > valor){
                anterior = anterior.anterior;
                i = i - 1;
            }

            if(anterior.value != valor){
                atual = undefined;
            }

            else{
                atual = anterior;
            }

        }

        else{
            let i = 0;

            while(proximo != undefined && proximo.value < valor){
                proximo = proximo.proximo;
                i = i + 1;
            }

            if(proximo.value != valor){
                atual = undefined;
            }

            else{
                atual = proximo;
            }

        }

        if (atual == undefined){
            return;
        }

        let novoData = [];

        let counter = 0

        while(counter != this.state.tamanho){

            if (this.state.nodeData[counter] === atual){
                counter+=1;
                continue;
            }

            else if(counter < atual.index){
                novoData = [...novoData, this.state.nodeData[counter]];
            }

            else{
                novoData = [...novoData, this.state.nodeData[counter]];
            }

            counter+=1;
        }

        console.debug("DEBUGANDO:");
        console.debug(novoData);

        if(atual.anterior)
            atual.anterior.proximo = atual.proximo;
        
        else
            this.state.noInicial = atual.proximo;
        
        if(atual.proximo)
            atual.proximo.anterior = atual.anterior;
        
        else
            this.state.noFinal = atual.anterior;
        
        while(atual !== undefined){
            atual.index-=1;
            atual = atual.proximo;
        }

        this.setState({tamanho: this.state.tamanho-=1});
        this.setState({nodeData: novoData});

    }

    buscaLDDE(valor){
        if(valor - this.state.noInicial.value > this.state.noFinal.value - valor){
            let anterior = this.state.noFinal;
            let i = this.state.tamanho - 1;

            while(anterior != undefined && anterior.value > valor){
                anterior = anterior.anterior;
                i = i - 1;
            }

            if(anterior.value != valor){
                alert("VOCÊ É CORNO");
            }

            else{
                alert("NÓ ENCONTRADO (DA DIREITA PARA ESQUERDA) NA POSIÇÃO " + String(i));
            }

        }
        else{
            let proximo = this.state.noInicial;
            let i = 0;

            while(proximo != undefined && proximo.value < valor){
                proximo = proximo.proximo;
                i = i + 1;
            }

            if(proximo.value != valor){
                alert("VOCÊ É CORNO");
            }

            else{
                alert("NÓ ENCONTRADO (DA ESQUERDA PARA DIREITA) NA POSIÇÃO " + String(i));
            }

        }
    }

    render(){
        const buttons = ['Inserir', 'Remover', 'Buscar']
        const { selectedIndex } = this.state;

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