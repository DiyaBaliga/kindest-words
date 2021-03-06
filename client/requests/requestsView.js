import React, {useState, useEffect} from 'react';
import { View, SafeAreaView, StyleSheet, useWindowDimensions } from 'react-native';
import RequestsPaging from './requestsPaging';
import RequestsButtonRow from './requestsButtonRow';
import axios from 'axios';
import {SERVER_URL} from '@env'

export default function RequestsView({navigation}) {
    const [allRequests, setAllRequests] = useState([]);
    const [displayItem, setDisplayItem] = useState(0);

    useEffect(()=> {
        axios
        .get(SERVER_URL + '/api/request/')
        .then((res) => {
          if (res.data) {
            setAllRequests(res.data);
          }
        })
        .catch((err) => console.log(err));
    }, []);

    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.scroll}>
                <RequestsPaging
                    content={allRequests}
                    displayItem={displayItem}
                    setDisplayItem={setDisplayItem}
                    isRequest
                />
                <RequestsButtonRow
                    request={allRequests[displayItem] ? allRequests[displayItem]._id : null}
                    navigation={navigation}
                    requestAuthor={allRequests[displayItem] ? allRequests[displayItem].authorID: null}
                />
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    scroll: {
        flex:1,
    }
});