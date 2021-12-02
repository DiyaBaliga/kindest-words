import React, {useState, useEffect} from 'react';
import { View, SafeAreaView, StyleSheet, useWindowDimensions } from 'react-native';
import ReplySearchingMenu from './replySearchingMenu';
import axios from 'axios';
import {SERVER_URL} from '../ip'

export default function ReplyMailbox({navigation}) {
    const [allReplies, setAllReplies] = useState([]);
    const [displayItem, setDisplayItem] = useState(0);
    const [requestFilter, setRequestFilter] = useState('');
    const [searchTerms, setSearchTerms] = useState('');

    useEffect(() => {
        console.log({searchTerms});
        // search the backend whenever the search terms are submitted
    }, [searchTerms])

    // this variable is what will actually be displayed
    const filteredReplies = allReplies.filter(reply => reply.requestID === requestFilter);



    useEffect(()=> {
        axios
        .get(SERVER_URL + '/api/request/')
        .then((res) => {
          if (res.data) {
            setAllReplies(res.data);
          }
        })
        .catch((err) => console.log(err));
    }, []);

    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.safeView}>
                <ReplySearchingMenu
                    setSearchTerms={setSearchTerms}
                    setRequestFilter={setRequestFilter}
                />
                {// replace the requestsPaging component with a reusable paging component for requests and replies
                    /*
                    <RequestsPaging
                        content={allRequests}
                        displayItem={displayItem}
                        setDisplayItem={setDisplayItem}
                    />
                    */
                }
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        width: '100%',
    },
    safeView: {
        flex:1,
    }
});