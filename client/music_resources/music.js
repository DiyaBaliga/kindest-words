import { StyleSheet, TouchableOpacity, View, Image, Touchable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

<View style={styles.container}>
    <View style={styles.controls}>
        <TouchableOpacity style={styles.control} onPress={() => alert('')}>
          <Ionicons name='ios-skip-backward' size={48} color='#ff1188' />
        </TouchableOpacity>
        <TouchableOpacity style={styles.control} onPress={() => alert('')}>
            {this.state.isPlaying ? (
                <Ionicons name='ios-pause' size={48} color='#ff1188' />
            ) : (
                <Ionicons name='ios-play-circle' size={48} color='#ff1188' />
            )}
        </TouchableOpacity>
        <TouchableOpacity style={styles.control} onPress={() => alert('')}>
            <Ionicons name='ios-skip-forward' size={48} color='#ff1188' />
        </TouchableOpacity>
            </View>
</View>

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    albumCover: {
        width: 250,
        height: 250
    },
    controls: {
        flexDirection: 'row'
    },
    control: {
        margin: 20
    }
})