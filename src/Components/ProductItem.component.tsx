import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Badge } from 'react-native-elements'
import { productRatingColor } from '../Helpers/Product.helper'

const ProductItem = (
  { item, setModalVisable, setCurrentProduct, modalVisable }:
    { item: any, setModalVisable: any, setCurrentProduct: any, modalVisable: any }) => {


  const handlePress = (item: any) => {
    setModalVisable(!modalVisable)
    setCurrentProduct(item)
  }

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => handlePress(item)}
    >
      <View>
        <Image style={styles.image} source={{ uri: item.image }} />
      </View>
      <View style={styles.itemData}>
        <Text style={styles.title}>{item.title}</Text>
        <Text ellipsizeMode='tail' numberOfLines={2}>{item.description}</Text>
      </View>
      <View style={styles.metaData}>
        <Text>R{item.price}</Text>
        <Badge containerStyle={{margin: 10}} status={productRatingColor(item.rating.rate)} value={item.rating.rate} />
      </View>
    </TouchableOpacity>
  )
}

export default ProductItem

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 10,
    marginHorizontal: 10,
    borderRadius: 7,
    backgroundColor: 'white',
    padding: 10,
    alignItems: 'center'
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    flex: 1
  },
  itemData: {
    flexDirection: 'column',
    flexShrink: 1,
    paddingHorizontal: 7
  },
  metaData: {
    flexDirection: 'column'
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold'
  }

})