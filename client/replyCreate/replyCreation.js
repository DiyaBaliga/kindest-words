import React, { useState } from 'react';
import { StyleSheet, View, useWindowDimensions, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';

export default function ReplyCreation() {
    const { width: windowWidth, height: windowHeight } = useWindowDimensions();
    const [content, onChangeContent] = useState(null);

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