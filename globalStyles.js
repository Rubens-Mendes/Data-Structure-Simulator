import { StyleSheet } from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        backgroundColor: '#333745',
        flex: 1,
        paddingHorizontal: 24,
        paddingTop : Constants.statusBarHeight + 5,
        flexDirection: 'column',
        justifyContent: 'center',
    },

    homeIcon: {
        alignSelf: 'center',
        color: '#BCCCC2',
        marginRight: 10
    },

    backIcon: {
        alignSelf: 'center',
        color: '#BCCCC2',
        marginLeft: 10
    },

    linkButton: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingHorizontal: "5%",
        marginBottom: "5%",
    },

    linkText: {
        color: '#67AAB8',
        fontSize: RFValue(18),
        fontFamily: "OpenSans-SemiBold",
    },
});