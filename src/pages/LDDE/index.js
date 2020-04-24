import React from 'react';
import {ScrollView, View, Text} from 'react-native';

import Styles from './styles';
import globalStyles from '../../../globalStyles';
import { useNavigation } from '@react-navigation/native';


export default function LDDE() {
    const navigation = useNavigation();

    function navigateBack(){
        navigation.goBack();
    }

    function navigateToHome(){
        navigation.navigate('Home');
    }

    return(
        <View style = {globalStyles.container}>
            <ScrollView style ={Styles.contentContainer}>
                <Text style={Styles.subtitle}>
                    Lista Dinâmica Duplamente Encadeada                
                </Text>
                <Text style={Styles.contentText}>
                    Esta estrutura, é um tipo de lista onde cada elemento, tem um 
                    apontamento para seu sucessor e antecessor, podendo a lista ser nula ou não.{'\n'}
                    Existem 2 elementos essenciais para a utilização da estrutura, que são os que possuem
                    uma indicação do início e do fim da lista.
                </Text>
                <Text style={Styles.subtitle}>
                    Nó                
                </Text>
                <Text style={Styles.contentText}>
                    A representação de um elemento na lista tem o nome de nó, cada nó possui um
                    valor, um ponteiro para um próximo nó e um ponteiro para o anterior. Os nós sempre
                    são alocados dinamicamente.
                </Text>

                <Text style={Styles.subtitle}>
                    Vantagens             
                </Text>
                <Text style={Styles.contentText}>
                    Pela natureza dinâmica da estrutura, ela só utiliza a memória necessária
                    para manter todos os elementos alocados.{"\n"}
                    Nas operações de inserção e remoção de elementos, só é preciso modificar os
                    direcionamentos dos ponteiros, não é necessário que se troque os elementos de 
                    lugar na memória. 
                </Text>
                <Text style={Styles.subtitle}>
                    Desvantagens             
                </Text>
                <Text style={Styles.contentText}>
                    Pelo fato de trabalhar apenas com apontamentos para locais de memória desconhecidos,
                    não é possível acessar diretamente os elementos da lista.{"\n"}
                    Pelo mesmo motivo, para acessar um elemento, é necessário que se percorra a lista
                    nó por nó até encontrar o desejado. 
                </Text>
            </ScrollView>
        </View>
    );
}