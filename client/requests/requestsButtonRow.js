import React, {useEffect, useContext} from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import {SERVER_URL} from '@env';
import { NavigationContainer } from "@react-navigation/native";
import { UserContext, UserContextProvider } from '../UserContext';


export default function RequestsButtonRow({ navigation, request, requestAuthor }) {
    const state = useContext(UserContext);
    const handleClick = () => {
        navigation.navigate('WriteReplies', {isReply: true, requestID: {request}, requestAuthorID: {requestAuthor}});
    }

    const initiateReport = () => {
        fetch(SERVER_URL + "/api/report/" + requestAuthor, {
            method: 'POST',
        })
        .then((response) => response.json())
    }
    
    return (
        <UserContextProvider>
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
                <Text style={styles.buttonText} onPress={initiateReport}>
                    Report
                </Text>
            </TouchableOpacity>
        </View>
        </UserContextProvider>
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