import React, { useState } from 'react';
import { StyleSheet, View, useWindowDimensions, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';

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
            <View style={{width: windowWidth, justifyContent: 'center', alignItems:'center'}}>
                <View style={styles.paper}>
                    <TextInput
                        multiline
                        style={styles.input}
                        onChangeText={onChangeContent}
                        value={content}
                    />
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    paper: {
      backgroundColor: '#fce8f4',
      padding: 20,
      borderRadius: 10,
      height: '90%',
      width: '80%',
      
    },
    input: {
        width: '100%',
        height: '100%',
        padding: 10,
        paddingTop: 0,
        paddingBottom: 0,
        borderWidth: 1,
        fontSize: 20,
        color: '#d87dac',
    },
});