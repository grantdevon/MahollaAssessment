import { Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Discover = () => {
  
  const goToURL = () => {
    Linking.openURL('https://youtu.be/xvFZjo5PgG0')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>I know this does not describe the application in short
        like one of the requirements listed. But just trust me on this
        and press the botton.
      </Text>
      <TouchableOpacity
      style={styles.button}
      onPress={goToURL}
      >
        <Text style={[styles.text, {color: 'white', paddingHorizontal: 20}]}>Press me lol</Text>
      </TouchableOpacity>
    </View>
  )
}


export default Discover

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FEF8F0',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
    margin: 10,
    textAlign: 'center'
  },
  button: {
    borderRadius: 7,
    backgroundColor: 'blue'
  }
})