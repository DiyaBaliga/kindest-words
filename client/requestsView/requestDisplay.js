import React from 'react';
import { StyleSheet, Text, View, useWindowDimensions } from 'react-native';

export default function RequestDisplay({ content }) {
    const { width: windowWidth, height: windowHeight } = useWindowDimensions();

    return (
        <View style={{width: windowWidth - 88, justifyContent: 'center', alignItems:'center'}}>
            <View style={styles.paper}>
                <Text style={styles.text}>{content}</Text>
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
    text: {
        color: '#fff',
        fontSize: 20,
    }
});