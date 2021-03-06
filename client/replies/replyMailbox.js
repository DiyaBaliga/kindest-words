import React, {useState, useEffect, useRef, useContext} from 'react';
import { RequestsPaging } from '../requests';
import { View, SafeAreaView, StyleSheet, useWindowDimensions } from 'react-native';
import ReplySearchingMenu from './replySearchingMenu';
import axios from 'axios';
import {SERVER_URL} from '@env'
import { UserContext, UserContextProvider } from '../UserContext';


export default function ReplyMailbox({ navigation }) {
    const [allReplies, setAllReplies] = useState([]);
    const [displayItem, setDisplayItem] = useState(0);
    const [requestFilter, setRequestFilter] = useState('');
    const [searchTerms, setSearchTerms] = useState('');
    const state = useContext(UserContext);
    const isFirstLoad = useRef(true);

    const searchForReplies = () => {
        const url = SERVER_URL + '/api/reply/keywordRequestAuthor/' + searchTerms + '/'+ state.user;
        //state.user

        axios
        .get(url)
        .then((res) => {
          if (res.data) {
            setAllReplies(res.data);
          }
        })
        .catch((err) => console.log(err));
    }

    const fetchAllReplies = () => {
        axios
        .get(SERVER_URL + '/api/reply/requestAuthor/' + state.user)
        .then((res) => {
          if (res.data) {
            setAllReplies(res.data);
          }
        })
        .catch((err) => console.log(err));
    }

    useEffect(() => {
        if(isFirstLoad.current) {
            fetchAllReplies();
            isFirstLoad.current = false;
        } else {
            searchForReplies();
        }
    }, [searchTerms])

    return (
        <UserContextProvider>
            <View style={styles.container}>
                <SafeAreaView style={styles.safeView}>
                    <ReplySearchingMenu
                        setSearchTerms={setSearchTerms}
                        setRequestFilter={setRequestFilter}
                    />
                    <RequestsPaging
                        content={allReplies}
                        displayItem={displayItem}
                        setDisplayItem={setDisplayItem}
                    />
                </SafeAreaView>
            </View>
        </UserContextProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#d87dac',
        flex: 1,
        width: '100%',
    },
    safeView: {
        flex:1,
    }
});