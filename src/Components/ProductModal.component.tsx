import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { Badge } from 'react-native-elements'
import { productRatingColor } from '../Helpers/Product.helper';


const ProductModal = ({ product, setModalVisable }: { product: any, setModalVisable: any }) => {

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => setModalVisable(false)}
      >
        <Icon
          style={styles.back}
          name='arrow-back'
          size={35}
          color={"black"}
        />

      </TouchableOpacity>

      <View style={styles.imageContainer}>
        <Image source={{ uri: product.image }} style={styles.image} />
      </View>
      <Text style={styles.title}>{product.title}</Text>

      <View style={styles.priceContainer}>
        <Text style={styles.price}>R{product.price}</Text>
        <Badge status={productRatingColor(product.rating.rate)} value={product.rating.rate} />
      </View>

      <Text style={styles.descriptionTitle}>Description:</Text>
      <Text style={styles.description}>{product.description}</Text>

    </View>
  )
}

export default ProductModal

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  imageContainer: {
    alignItems: 'center',
  },
  back: {
    padding: 10
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    padding: 10,
    color: 'black'
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10
  },
  price: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'black',
    paddingRight: 10
  },
  rating: {
    fontWeight: 'bold',
    color: 'black',
    backgroundColor: "green"
  },
  descriptionTitle: {
    fontWeight: 'bold',
    fontSize: 17,
    color: 'black',
    padding: 10
  },
  description: {
    color: 'black',
    paddingHorizontal: 10
  }
})