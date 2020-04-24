import React from 'react';
import { Feather } from '@expo/vector-icons';
import {View, Text, TouchableOpacity} from 'react-native';

import Styles from './styles';
import globalStyles from '../../../globalStyles';
import { useNavigation } from '@react-navigation/native';

export default function Tuto() {
    const navigation = useNavigation();

    function navigateBack(){
        navigation.goBack();
    }

    function navigateToLDDE(){
        navigation.navigate('LDDE');
    }

    function navigateToFila(){
        navigation.navigate('Fila');
    }

    return(
        <View style = {globalStyles.container}>
            <View style ={Styles.helpContainer}>
                <Text style={Styles.title}>Primeiros Passos</Text>
                <Text style={Styles.subtitle}>
                    Leia uma breve documentação sobre o simulador
                </Text>
                <TouchableOpacity style={globalStyles.linkButton}>
                    <Text style={globalStyles.linkText}>Ir para a documentação</Text>
                    <Feather name="arrow-right" size={20} color="#67AAB8" marginRight={15} />
                </TouchableOpacity>
            </View>

            <View style ={Styles.helpContainer}>
                <Text style={Styles.title}>LDDE</Text>
                <Text style={Styles.subtitle}>
                    Aprenda conceitos relacionados à Lista Dinâmica Duplamente Encadeada.
                </Text>
                <TouchableOpacity style={globalStyles.linkButton} onPress={navigateToLDDE}>
                    <Text style={globalStyles.linkText}>Ir para LDDE</Text>
                    <Feather name="arrow-right" size={20} color="#67AAB8" marginRight={15} />
                </TouchableOpacity>
            </View>

            <View style ={Styles.helpContainer}>
                <Text style={Styles.title}>Fila</Text>
                <Text style={Styles.subtitle}>
                    Leia sobre uma das estruturas aqui representadas, a Fila Estática Circular.
                </Text>
                <TouchableOpacity style={globalStyles.linkButton} onPress={navigateToFila}>
                    <Text style={globalStyles.linkText}>Ir para Fila</Text>
                    <Feather name="arrow-right" size={20} color="#67AAB8" marginRight={15} />
                </TouchableOpacity>
            </View>
        </View>
    );
}