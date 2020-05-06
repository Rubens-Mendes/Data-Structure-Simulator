import React from 'react';
import {Text, View, SafeAreaView, Image, Dimensions} from 'react-native';

import Styles from './styles';

import Carousel from 'react-native-snap-carousel';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 3 / 4);

export default class Info extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          activeIndex:0,
          carouselItems: [
          {
              text: "A lista dinâmica duplamente encadeada,é um tipo de lista onde cada elemento, tem um apontamento para seu sucessor e antecessor, podendo a lista ser nula ou não. Existem 2 nós essenciais para a utilização da estrutura, o inicial e o final.",
              imgSrc: require('../../../assets/LDDE.png'),
          },
          {
              text: "A fila estática circular, é uma estrutura linear, cujas inserções são feitas no final do vetor, e as remoções são feitas no início do mesmo, assim como uma fila convencional.",
              imgSrc: require('../../../assets/Fila.png'),
          },
        ]
      }
    }

    _renderItem({item,index}){
        return (
          <View style = {Styles.contentContainer}>
            <View style = {Styles.imgContainer}>
                <Image source={item.imgSrc} style={Styles.imgDesc}></Image>
            </View>
            <Text style={Styles.contentText}>{item.text}</Text>
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

