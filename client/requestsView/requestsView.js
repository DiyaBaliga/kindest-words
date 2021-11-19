import React from 'react';
import { SafeAreaView, StyleSheet, useWindowDimensions } from 'react-native';
import RequestsPaging from './requestsPaging';
import RequestsButtonRow from './requestsButtonRow';

export default function RequestsView({ content }) {
    return (
        <SafeAreaView>
            <RequestsPaging/>
            <RequestsButtonRow/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});