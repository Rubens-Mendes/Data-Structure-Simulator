import { StyleSheet,Dimensions } from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
    containerNo:{
        display: 'flex',
        width: windowWidth*0.2,
        height: windowHeight*0.14,
        marginHorizontal: windowWidth*0.02,
        alignSelf: 'center',
    },
    no:{
        backgroundColor: "#0d111e22",
        borderRadius: 100,
        width: windowWidth*0.2,
        height: windowHeight*0.1,
        justifyContent: 'center',
    },
    valueNo:{
        fontSize: RFValue(22),
        color: '#BCCCC2',
        fontFamily: "OpenSans-SemiBold",
        textAlign: 'center',
        justifyContent: 'center',
    },
    indexNo:{
        fontSize: RFValue(20),
        color: '#BCCCC2',
        fontFamily: "OpenSans-SemiBold",
        textAlign: 'center',
        marginTop: '1%',
    },

    stepContainer:{
        backgroundColor: "#0d111e77",
        height: windowHeight*0.35,
        marginTop: "5%",
    },

    stepText:{
        fontSize: RFValue(17),
        color: '#BCCCC2',
        fontFamily: "OpenSans-Regular",
        textAlign: 'justify',
        paddingHorizontal: '4%',
        paddingVertical: '2%',
    },
});