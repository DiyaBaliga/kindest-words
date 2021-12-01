import React, {useState, useEffect} from 'react';
import { View, SafeAreaView, StyleSheet, useWindowDimensions } from 'react-native';
import RequestsPaging from './requestsPaging';
import RequestsButtonRow from './requestsButtonRow';
import axios from 'axios';
import {SERVER_URL} from '../ip'

export default function RequestsView() {
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
                />
                <RequestsButtonRow
                    requestID={content[displayItem]._id}
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