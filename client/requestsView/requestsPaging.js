import React, {useRef} from 'react';
import { ScrollView, StyleSheet, Animated, View, useWindowDimensions } from 'react-native';
import RequestDisplay from "./requestDisplay";
import data from './sampleRequestObjects.json';

export default function RequestsPaging() {
    const scrollX = useRef(new Animated.Value(0)).current;
    const { width: windowWidth, height: windowHeight } = useWindowDimensions();

    return (
        <ScrollView
            horizontal={true}
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={() => Animated.event(
                [
                {
                nativeEvent: {
                    contentOffset: {
                    x: scrollX
                    }
                }
                }
                ],
                {useNativeDriver: true}
            )}
            scrollEventThrottle={1}
            >
        {data.requestStream.map((request) => {
            return(
                <RequestDisplay content={request.content} key={request._id} />
            )
        })}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});