import React from 'react';
import { StyleSheet, Text, View, useWindowDimensions } from 'react-native';

export default function RequestDisplay({ content, isRequest }) {
    const { width: windowWidth, height: windowHeight } = useWindowDimensions();

    return (
        <View style={{width: windowWidth, justifyContent: 'center', alignItems:'center'}}>
            <View style={isRequest ? styles.paper : styles.replyPaper}>
                <Text style={isRequest ? styles.text : styles.replyText}>{content}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    paper: {
      backgroundColor: '#d87dac',
      padding: 20,
      borderRadius: 10,
      height: '90%',
      width: '80%',
    },
    replyPaper: {
      backgroundColor: '#fce8f4',
      padding: 20,
      borderRadius: 10,
      height: '90%',
      width: '80%',
    },
    text: {
        color: '#fce8f4',
        fontSize: 20,
    },
    replyText: {
        color: '#d87dac',
        fontSize: 20,
    }
});