import { StyleSheet } from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";

export default StyleSheet.create({
    helpContainer: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        backgroundColor:'#2F3340',
        borderRadius: 10,
        height: "auto",
        marginBottom: 20,
    },

    title: {
        fontSize: RFValue(24),
        marginTop: 10,
        color: '#BCCCC2',
        textAlign: 'center',
        fontFamily: "OpenSans-SemiBold",
    },

    subtitle: {
        fontSize: RFValue(18),
        marginTop: 10,
        color: '#BCCCC2',
        textAlign: 'center',
        fontFamily: "OpenSans-Regular",
        paddingHorizontal: 10,
    },
});