import React, {useState, useEffect} from 'react';
import { View, SafeAreaView, StyleSheet, useWindowDimensions } from 'react-native';
import RequestsPaging from './requestsPaging';
import RequestsButtonRow from './requestsButtonRow';
import axios from 'axios';
import data from './sampleRequestObjects.json';


export default function RequestsView() {
    const [allRequests, setAllRequests] = useState([]);

    useEffect(()=> {

        // axios
        // .get('/api/request')
        // .then((res) => {
        //   if (res.data) {
        //     setAllRequests(res.requestStream)
        //     this.setState({
        //       todos: res.data,
        //     });
        //   }
        //   console.log(error.res.data)
        // })
        // .catch((err) => console.log(err));

        var temp = data.requestStream;

        setAllRequests(temp);
    }, []);

    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.scroll}>
                <RequestsPaging
                    content={allRequests}
                />
                <RequestsButtonRow/>
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    scroll: {
        flex:1,
    }
});