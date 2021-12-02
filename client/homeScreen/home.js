import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Button } from 'react-native';

export default function HomeScreen({navigation}) {
    return (
        <View style={styles.container}>
            <Text style={styles.buttonText}>
                I'm here!
            </Text>
            <Button
                title="Check Requests"
                onPress={()=> navigation.navigate("Requests")}
            />
            <Button
                title="Check Replies"
                onPress={()=> navigation.navigate("ReplyMailbox")}
            />
            <Button
                title="Make Request"
                onPress={()=> navigation.navigate("WriteRequests", {params:  { user: '', isReply: false}})}
            />
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