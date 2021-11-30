import React, {useState, useEffect} from 'react';
import { View, SafeAreaView, StyleSheet, useWindowDimensions } from 'react-native';
import RequestsPaging from './requestsPaging';
import RequestsButtonRow from './requestsButtonRow';

export default function RequestsView() {
    const [allRequests, setAllRequests] = useState([]);

    useEffect(()=> {
        var temp = [];
        //insert pull of requests here
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
        flex: 1,
    },
    scroll: {
        flex:1,
    }
});