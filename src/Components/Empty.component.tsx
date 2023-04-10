import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LottieView from "lottie-react-native";


const Empty = () => {
  return (
    <View style={styles.container}>
        <LottieView source={require("../Assests/empty.json")}
        style={styles.image}
        autoPlay
        loop
        />
      <Text style={styles.text}>Well this is awkward...</Text>
    </View>
  )
}

export default Empty

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontWeight: 'bold',
        color: "black"
    },
    image: {
        width: 250,
        height: 250
      },
})