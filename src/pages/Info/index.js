import React from 'react';
import {Text, View, SafeAreaView, Image, Dimensions, TouchableOpacity} from 'react-native';
import { Feather } from '@expo/vector-icons';

import Styles from './styles';
import globalStyles from '../../../globalStyles'

import Carousel from 'react-native-snap-carousel';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);

export default class Info extends React.Component {
    constructor(props){
        super(props);
        const { navigation } = this.props;

        this.navigateToSimuFila = this.navigateToSimuFila.bind(this);
        this.navigateToSimuLDDE = this.navigateToSimuLDDE.bind(this);

        this.state = {
          activeIndex:0,
          carouselItems: [
          {
              text: "A lista dinâmica duplamente encadeada,é um tipo de lista onde cada elemento, tem um apontamento para seu sucessor e antecessor, podendo a lista ser nula ou não. Existem 2 nós essenciais para a utilização da estrutura, o inicial e o final.",
              imgSrc: require('../../../assets/LDDE.png'),
              linkText: "Ir para simulação da LDDE",
              action: this.navigateToSimuLDDE
          },
          {
              text: "A fila estática circular, é uma estrutura linear, cujas inserções são feitas no final do vetor, e as remoções são feitas no início do mesmo, assim como uma fila convencional.",
              imgSrc: require('../../../assets/Fila.png'),
              linkText: "Ir para simulação da Fila",
              action: this.navigateToSimuFila
          },
        ]
      }
    }

    navigateToSimuFila(){
      this.props.navigation.navigate('SimuFila');
    }

    navigateToSimuLDDE(){
      this.props.navigation.navigate('SimuLDDE');
    }

    _renderItem({item,index}){
        return (
          <View style = {Styles.contentContainer}>
            <View style = {Styles.imgContainer}>
                <Image source={item.imgSrc} style={Styles.imgDesc}></Image>
            </View>
            <Text style={Styles.contentText}>{item.text}</Text>
            <TouchableOpacity style={globalStyles.linkButton} onPress={item.action}>
                <Text style={globalStyles.linkText}>{item.linkText}</Text>
                <Feather name="arrow-right" size={16} color="#67AAB8"/>
            </TouchableOpacity>
          </View>
        );
    }

    render() {
        return (
          <SafeAreaView style = {Styles.container}>
            <View style={{ flex: 1, flexDirection:'row', justifyContent: 'center', }}>
                <Carousel
                  layout={"default"}
                  ref={ref => this.carousel = ref}
                  data={this.state.carouselItems}
                  sliderWidth={SLIDER_WIDTH*0.9}
                  itemWidth={ITEM_WIDTH * 1.2}
                  renderItem={this._renderItem}
                  onSnapToItem = { index => this.setState({activeIndex:index}) } />
            </View>
          </SafeAreaView>
        );
    }
}

