import React from 'react';
import { Feather } from '@expo/vector-icons';
import {ScrollView, View, Text, TouchableOpacity} from 'react-native';

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
                    Fila Estática Circular               
                </Text>
                <Text style={Styles.contentText}>
                    Esta é uma estrutura linear, cujas inserções são feitas no final do vetor, 
                    e as remoções são feitas no início do mesmo, assim como uma fila convencional.{'\n'}
                    Dois dados são importantes para a fila, que são o número de elementos alocados e o início da mesma,
                    a posição do início está sempre com o valor de posição do elemento antigo na lista, portanto o início não necessariamente
                    é a primeira posição do vetor.{'\n'}O valor a ser removido sempre estará na posição do início e após a remoção ser efeituada
                    o início vai uma posição para a frente na fila.
                </Text>
                <Text style={Styles.subtitle}>
                    Aplicações           
                </Text>
                <Text style={Styles.contentText}>
                    - Filas de espera e algoritmos de simulação.{'\n'}
                    - Controle por parte do sistema operacional a recursos
                      compartilhados, tais como impressoras.{'\n'}
                    - Buffers de Entrada/Saída.{'\n'}
                    - Estrutura de dados auxiliar em alguns algoritmos como a 
                      busca em largura.
                </Text> 
            </ScrollView>
        </View>
    );
}