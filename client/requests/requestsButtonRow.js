import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";


export default function RequestsButtonRow({navigation}) {
    const handleClick = () => {
        navigation.navigate("WriteReplies");
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity 
                style={styles.button}
                onPress={handleClick}
            >
                <Text style={styles.buttonText}>
                    Reply
                </Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.button}
            >
                <Text style={styles.buttonText}>
                    Report
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
        flexDirection: 'row',
        marginBottom: 10,
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
        margin: 10,
        width: '42%',
    },
});