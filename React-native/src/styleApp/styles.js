import { StyleSheet } from "react-native";

export const SignInSignUpStyle = StyleSheet.create({
    container: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        alignItems: "center",
    },
    buttonContainer: {
        width: '80%',
    },
    buttonRow: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
    },
    button: {
        marginVertical: 10,
        backgroundColor: '#32CD32',
        padding: 10,
        borderRadius: 5,
        width: '45%', 
    },
    buttonText: {
        color: 'black', 
        fontWeight: 'bold', 
        textAlign: 'center',
    },
    input: {
        height: 50,
        width: '100%', 
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        padding: 10,
        borderRadius: 5,
        color: '#32CD32'
    },
});

export const IndexStyles = StyleSheet.create({
    container: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        alignItems: "center",
    },
    textindex: {
        width: 50,
        height: 50,
    },
    overlayImage: {
        position: 'absolute',
    },
    buttonImage: {
        borderRadius: 50,
        marginTop: 220, 
    },
});