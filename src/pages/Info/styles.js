import { StyleSheet } from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        backgroundColor: '#333745EE',
        flex: 1,
        paddingTop : Constants.statusBarHeight + 5,
        flexDirection: 'row',
        justifyContent: 'center',
    },

    contentContainer: {
        height: '90%',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        backgroundColor: '#333745',
        alignItems: 'center',
    },

    imgDesc: {
        alignSelf: 'center',
        height:'100%', 
        width:'100%',
        resizeMode:'stretch',
    },

    imgContainer: {
        width: "100%",
        height: "63%",
    },

    contentText: {
        fontSize: RFValue(16),
        paddingBottom: 10,
        color: '#BCCCC2',
        textAlign: 'left',
        fontFamily: "OpenSans-Regular",
        paddingHorizontal: '5%',
    },

    imgContainerTuto: {
        width: "90%",
        alignSelf: 'center',
        paddingVertical: '2%',
    },
});