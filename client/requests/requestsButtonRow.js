import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";


export default function RequestsButtonRow() {
    const handleClick = () => {
        navigation.navigate('ReplyCreation');
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity 
                style={styles.button}
                onClick={handleClick}
            >
                <Text style={styles.buttonText}>
                    Reply
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        paddingTop: 10,
    },
    buttonText: {
        fontSize: 20,
        fontWeight: "500",
        padding: 5,
        color: "#d87dac",
        textAlign: "center",
    },
    button: {
        backgroundColor: '#f9e3ef',
        borderRadius: 4,
        width: "80%",
    }
});