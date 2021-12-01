import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView, useWindowDimensions, TextInput, TouchableWithoutFeedback, Keyboard, TouchableOpacity, Text } from 'react-native';
import axios from 'axios';
import {SERVER_URL} from '../ip'

export default function ReplyCreation({ navigation }) {
    const { width: windowWidth, height: windowHeight } = useWindowDimensions();
    const [content, setContent] = useState(null);
    const styleColor = navigation.getParam('isReply') ? styles.replyColor : styles.requestColor;

    const postReply = () => {    
        const url = navigation.getParam('isReply') ? '/api/reply/' : '/api/request';
        const postContents = navigation.getParam('isReply') ? {
            content: content,
            authorID: '6191825f72d3e52a83b89521',
            date: '-',
            requestID: '61a32192144b0646fbc3e07a',
        } : {
            content: content,
            authorID: '6191825f72d3e52a83b89521',
            date: '-',
        };
        axios.post(SERVER_URL + url, postContents)
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
                <View style={[styles.paper, styleColor]}>
                    <TextInput
                        multiline
                        style={[styles.input, styleColor]}
                        onChangeText={setContent}
                        value={content}
                    />
                </View>

                        {/* Bottom button */}
                <View style={styles.container}>
                    <TouchableOpacity 
                        style={[styles.button, styleColor]}
                        onPress={postReply}
                    >
                        <Text style={[styles.buttonText, styleColor]}>
                            Send
                        </Text>
                    </TouchableOpacity>
                </View>

            </SafeAreaView>
        </TouchableWithoutFeedback>

    );
}

const styles = StyleSheet.create({
    replyColor: {
        backgroundColor: '#fce8f4',
        color: '#d87dac',
    },
    requestColor: {
        backgroundColor: '#d87dac',
        color: '#fce8f4',
    },
    paper: {
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
        textAlign: "center",
    },
    button: {
        borderRadius: 4,
        width: "80%",
    }
});