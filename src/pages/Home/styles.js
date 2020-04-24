import { StyleSheet } from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";

export default StyleSheet.create({
    text: {
        fontSize: RFValue(24),
        color: '#BCCCC2',
        textAlign: 'center',
        fontFamily: "OpenSans-SemiBold",
        paddingVertical: "6%",
    },

    confirmButton: {
        backgroundColor: '#333745',
        width: "80%",
        height: "auto",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginBottom: "4%",
    },

    negativeButton: {
        backgroundColor: '#333745',
        width: "80%",
        height: "auto",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginBottom: "5%",
    },

    actionText: {
        color: '#BCCCC2',
        fontSize: RFValue(18),
        fontFamily: "OpenSans-SemiBold",
        paddingHorizontal: "3%",
        paddingVertical: "10%",
        textAlign: 'center',
    },

    actions: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#5d6170',
        borderRadius: 10,
        height:"auto",
        opacity: 0.92,
    }
});