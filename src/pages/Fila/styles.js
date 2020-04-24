import { StyleSheet } from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";

export default StyleSheet.create({
    contentContainer: {
        flexDirection: 'column',
        height: "auto",
        paddingBottom: 40,
        marginBottom: 30,
        backgroundColor: '#00000000',
    },

    subtitle: {
        fontSize: RFValue(19),
        paddingBottom: 10,
        color: '#BCCCC2',
        textAlign: 'left',
        fontFamily: "OpenSans-SemiBold",
    },

    contentText: {
        fontSize: RFValue(16),
        paddingBottom: 10,
        color: '#BCCCC2',
        textAlign: 'left',
        fontFamily: "OpenSans-Regular",
    },

    linkButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        paddingVertical:10,
    },

    linkText: {
        color: '#67AAB8',
        fontSize: RFValue(17),
        fontFamily: "OpenSans-Regular",
    },
});