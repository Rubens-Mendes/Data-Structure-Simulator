import { StyleSheet } from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        backgroundColor: '#333745',
        flex: 1,
        paddingHorizontal: '3%',
        paddingTop : Constants.statusBarHeight + 5,
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },

    dropdown: {
      width: '32%',
    },

    dropdownPicker:{
        borderBottomColor:'transparent',
        borderWidth: 0, 
        backgroundColor: '#333745',
    },

    action:{
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: "center",
        alignSelf: "flex-start",
    },

    input:{
        color: '#333745',
        fontSize: RFValue(26),
        backgroundColor: 'white',
        width: '45%',
        fontFamily: "OpenSans-Regular",
    },

    okText:{
        fontSize: RFValue(18),
        color: '#BCCCC2',
        fontFamily: "OpenSans-SemiBold",
        textAlign: 'center',
        paddingHorizontal: '5%',
        paddingVertical: '3%',
    },

    okButton:{
        backgroundColor:'#2F3340',
        borderRadius: 10,
    }
});