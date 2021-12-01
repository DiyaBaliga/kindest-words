import React, {useEffect, useRef} from 'react';
import { ScrollView, StyleSheet, Animated, View, useWindowDimensions, Text } from 'react-native';
import RequestDisplay from "./requestDisplay";

export default function RequestsPaging({content}) {
    const scrollX = useRef(new Animated.Value(0).addListener(callback));

    const callback = (value) => {
        console.log(value);
    }

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
                            x: scrollX.current
                            }
                        }
                    }
                ],
                {useNativeDriver: true}
            )}
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