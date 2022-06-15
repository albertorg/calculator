import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    fondo: {
        flex: 1,
        backgroundColor: 'black',
    },
    calContainer: {
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: 'flex-end',
    },
    result: {
        color: 'white',
        fontSize: 60,
        textAlign: 'right',
        marginBottom: 10,
    },
    smallResult: {
        fontSize: 30,
        textAlign: 'right',
        color: 'rgba(255,255,255,0.5)',
    },
    button: {
        height: 80,
        width: 80,
        backgroundColor: '#2d2d2d',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
    },
    buttonText: {
       textAlign: 'center',
       padding: 10,
       fontSize: 30,
       color: 'white', 
       fontWeight: '400',
    },
    fila: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 20,
        paddingHorizontal: 10,
    }
})