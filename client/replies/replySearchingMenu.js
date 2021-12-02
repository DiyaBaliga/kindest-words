import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function replySearchingMenu({setSearchTerms, setRequestFilter}) {
    const [textInput, setTextInput] = useState('');


    return (
        <View style={styles.container}>
            <TextInput
                inlineImageLeft={<FontAwesome name="search" size={24} color="#d87dac" />}
                inlineImagePadding={5}
                value={textInput}
                onChangeText={setTextInput}
                onSubmitEditing={setSearchTerms}
                placeholder='Search through your mail!'
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
        flexDirection: 'row',
        marginBottom: 10,
    },
    searchBar: {
        backgroundColor: '#f9e3ef',
        borderRadius: 4,
        margin: 10,
        width: '95%',
    },
    searchText: {
        fontSize: 20,
        fontWeight: "500",
        padding: 5,
        color: "#d87dac",
        textAlign: "center",
    },
});