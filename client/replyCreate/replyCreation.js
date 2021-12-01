import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView, useWindowDimensions, TextInput, TouchableWithoutFeedback, Keyboard, TouchableOpacity, Text } from 'react-native';
import axios from 'axios';
import {SERVER_URL} from '../ip'

export default function ReplyCreation({route}) {
    const { width: windowWidth, height: windowHeight } = useWindowDimensions();
    const [content, setContent] = useState(null);
    const { isReply, requestID } = route.params;


    const postReply = () => {    
        axios.post(SERVER_URL + '/api/reply/', {
            content: content,
            authorID: '6191825f72d3e52a83b89521',
            date: '-',
            requestID: '61a32192144b0646fbc3e07a'
          })
          .then(function (response) {
            // clear content after it's submitted
            setContent("");
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    {/* Text Input Area */}
            <SafeAreaView style={{width: windowWidth, justifyContent: 'center', alignItems:'center'}}>
                <View style={styles.paper}>
                    <TextInput
                        multiline
                        style={styles.input}
                        onChangeText={setContent}
                        value={content}
                    />
                </View>

                        {/* Bottom button */}
                <View style={styles.container}>
                    <TouchableOpacity 
                        style={styles.button}
                        onPress={postReply}
                    >
                        <Text style={styles.buttonText}>
                            Send
                        </Text>
                    </TouchableOpacity>
                </View>

            </SafeAreaView>
        </TouchableWithoutFeedback>

    );
}

const styles = StyleSheet.create({
    paper: {
      backgroundColor: '#fce8f4',
      padding: 20,
      borderRadius: 10,
      height: '87%',
      width: '80%',
      margin: 20,
    },
    input: {
        width: '100%',
        height: '100%',
        padding: 10,
        paddingTop: 0,
        paddingBottom: 0,
        fontSize: 20,
        color: '#d87dac',
    },
    container:{
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        paddingTop: 10,
        width: '100%',
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