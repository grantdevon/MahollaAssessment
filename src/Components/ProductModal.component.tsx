import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ProductModal = ({product, setModalVisable}: {product: any, setModalVisable: any}) => {
  return (
    <View>
      <Text onPress={() => setModalVisable(false)}>{product.title}</Text>
    </View>
  )
}

export default ProductModal

const styles = StyleSheet.create({})