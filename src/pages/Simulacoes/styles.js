import { StyleSheet, Dimensions } from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
    container: {
        backgroundColor: '#333745',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },

    actionButton:{
        backgroundColor:'#0d111e22',
        width: '100%',
        marginHorizontal: '2%',
    },

    SelectedButton:{
        backgroundColor:'#0d111e77',
    },

    buttonsContainer:{
        marginTop: 15,
        width: windowWidth*0.9,
        backgroundColor: "#FFFFFF00",
        alignSelf: 'center',
    },

    simulationContainer:{
        backgroundColor: "#0d111e77",
        height: windowHeight*0.25
    },

    stepContainer:{
        backgroundColor: "#0d111e77",
        height: windowHeight*0.3,
        marginTop: "10%",
    },

    actionContainer:{
        display: 'flex',
        flexDirection: 'column',
        width: windowWidth,
        height: windowHeight*0.23,
        backgroundColor: '#2F3340',
        alignSelf: 'center',
        alignContent: 'space-between',
    },

    inputBar:{
        display: 'flex',
        flexDirection: 'row',
        width: windowWidth*0.9,
        alignItems: "center",
        alignSelf: "center",
        marginTop: "1%",
    },

    input:{
        color: '#333745',
        fontSize: RFValue(26),
        backgroundColor: 'white',
        width: '75%',
        fontFamily: "OpenSans-Regular",
    },

    okText:{
        fontSize: RFValue(18),
        color: '#BCCCC2',
        fontFamily: "OpenSans-SemiBold",
        textAlign: 'center',
        paddingHorizontal: '5%',
        paddingVertical: '10%',
    },

    okButton:{
        backgroundColor:'#0d111e77',
        borderRadius: 10,
        width: '25%',
        marginLeft: '2%',
    },
});