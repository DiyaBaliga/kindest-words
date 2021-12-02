import React, {useEffect, useRef, useState} from 'react';
import { ScrollView, StyleSheet, Animated, View, useWindowDimensions, Text } from 'react-native';
import RequestDisplay from "./requestDisplay";

export default function RequestsPaging({content, displayItem, setDisplayItem}) {
    const scrollX = useRef(new Animated.Value(0));
    const { width: windowWidth } = useWindowDimensions();

    return (
        <ScrollView
            horizontal={true}
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={(event) => {
                setDisplayItem(parseInt(event.nativeEvent.contentOffset.x / windowWidth));
                return (
                Animated.event(
                [
                    {
                        nativeEvent: {
                            contentOffset: {
                            x: scrollX.current
                            }
                        }
                    }
                ],
                {useNativeDriver: true}
                ));
            }}
            scrollEventThrottle={1}
            >
        {content.map((request) => {
            return(
                <RequestDisplay content={request.content} key={request._id} />
            )
            })
        }
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});