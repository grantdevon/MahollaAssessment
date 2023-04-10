import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Loading = ({ text }: { text: string }) => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size={'large'}/>
            <Text>{text}</Text>
        </View>
    )
}

export default Loading

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})