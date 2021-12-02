import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function ReplySearchingMenu({setSearchTerms, setRequestFilter}) {
    const [textInput, setTextInput] = useState('');


    return (
        <View style={styles.container}>
            <View style={styles.searchBar}>
                <FontAwesome name="search" size={24} color="white" style={styles.searchIcon}/>
                <TextInput
                    value={textInput}
                    onChangeText={setTextInput}
                    onSubmitEditing={(e) => { setSearchTerms(e.nativeEvent.text)}}
                    placeholder='Search through your mail!'
                    style={styles.searchText}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
        paddingTop: 10,
        flexDirection: 'column',
        paddingBottom: 10,
        backgroundColor: '#f9e3ef',
    },
    searchBar: {
        borderWidth: 3,
        borderColor: 'white',
        borderRadius: 4,
        margin: 10,
        width: '95%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    searchText: {
        fontSize: 20,
        fontWeight: "500",
        padding: 10,
        color: "#d87dac",
        textAlign: "left",
    },
    searchIcon: {
        paddingLeft: 10,
    }
});