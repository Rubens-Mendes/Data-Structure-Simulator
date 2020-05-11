import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Styles from './styles';
import globalStyles from '../../../globalStyles'

export default function Home() {
    const navigation = useNavigation();

    function navigateToTutorial(){
        navigation.navigate('Tutorial');
    }

    function navigateToSimuLDDE(){
        navigation.navigate('SimuLDDE');
    }
    return(
        <View style = {globalStyles.container}>
           <View style = {Styles.actions}>
            <Text style= {Styles.text}>Como deseja iniciar sua experiência ?</Text>
                <TouchableOpacity style={Styles.confirmButton} onPress={navigateToTutorial}>
                    <Text style={Styles.actionText}>Preciso de um tutorial</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.negativeButton} onPress={navigateToSimuLDDE}>
                    <Text style={Styles.actionText}>Quero partir para a simulação</Text>
                </TouchableOpacity>
           </View>
        </View>
    );
}