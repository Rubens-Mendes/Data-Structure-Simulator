import React from 'react';
import {Text, View, SafeAreaView, Image, Dimensions} from 'react-native';

import Styles from '../styles';

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
              imgSrc: require('../../../../assets/Tuto_01.png'),
          },
          {
              imgSrc: require('../../../../assets/Tuto_02.png'),
          },
          {
            imgSrc: require('../../../../assets/Tuto_03.png'),
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
            <View style = {Styles.imgContainerTuto}>
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
                  sliderWidth={SLIDER_WIDTH*0.95}
                  itemWidth={ITEM_WIDTH * 1.2}
                  renderItem={this._renderItem}
                  onSnapToItem = { index => this.setState({activeIndex:index}) } />
            </View>
          </SafeAreaView>
        );
    }
}

