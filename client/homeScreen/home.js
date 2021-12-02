import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Button, Pressable } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons';


export default function HomeScreen({navigation}) {
    const [isPlaying, setIsPlaying] = useState(false);

    const toggle = () => {
      setIsPlaying(!isPlaying);
    }


    return (
        <View style={styles.container}>
            <Pressable onPress={toggle} style={styles.volumeButtonStyles}>
                <FontAwesome5 name={isPlaying ? "volume-mute" : "volume-down"} size={24} color="white" />
            </Pressable>
            <Pressable style={styles.button} onPress={()=> navigation.navigate("Requests")}>
                <MaterialCommunityIcons name="message-reply-text" size={70} color="white" />
                <Text style={styles.buttonText}>Check Requests</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={()=> navigation.navigate("ReplyMailbox")}>
                <Ionicons name="mail-unread" size={70} color="white" />
                <Text style={styles.buttonText}>Check Replies</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={()=> navigation.navigate("WriteRequests")}>
                <Ionicons name="create" size={70} color="white" />
                <Text style={styles.buttonText}>Make Request</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "space-evenly",
        alignContent: "center",
        alignItems: "center",
        paddingTop: 10,
    },
    buttonText: {
        fontSize: 20,
        fontWeight: "500",
        padding: 5,
        color: "#fff",
        textAlign: "center",
    },
    button: {
        backgroundColor: '#d87dac',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: 200,
        height: 200
    },
    volumeButtonStyles:{
        backgroundColor: '#d87dac',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: 40,
        height: 40,
    }
});