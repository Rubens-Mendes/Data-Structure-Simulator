import React from 'react';
import {Text, View, SafeAreaView,Image} from 'react-native';

import Styles from './styles';

import Carousel from 'react-native-snap-carousel';

export default class Info extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          activeIndex:0,
          carouselItems: [
          {
              title: "Lista Dinâmica Duplamente Encadeada",
              text: "Esta estrutura,é um tipo de lista onde cada elemento, tem um apontamento para seu sucessor e antecessor, podendo a lista ser nula ou não. Existem 2 nós essenciais para a utilização da estrutura, o inicial e o final.",
              imgSrc: require('../../../assets/LDDE.png'),
          },
          {
              title: "Fila Estática Circular",
              text: "Esta é uma estrutura linear, cujas inserções são feitas no final do vetor, e as remoções são feitas no início do mesmo, assim como uma fila convencional.",
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
            <Text style={Styles.subtitle}>{item.title}</Text>
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
                  sliderWidth={380}
                  itemWidth={340}
                  renderItem={this._renderItem}
                  onSnapToItem = { index => this.setState({activeIndex:index}) } />
            </View>
          </SafeAreaView>
        );
    }
}

