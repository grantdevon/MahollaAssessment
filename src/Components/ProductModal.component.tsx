import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { Badge } from 'react-native-elements'


const ProductModal = ({ product, setModalVisable }: { product: any, setModalVisable: any }) => {

  console.log(product.image);

  const productRatingColor = (rating: number) => {
    let badgeColor: string = 'success'

    if (rating < 4 && rating > 2) {
      badgeColor = 'warning'
      return badgeColor
    }

    if (rating < 2 ) {
      badgeColor = 'error'
      return badgeColor
    }
    return badgeColor
  }

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

        <View style={styles.imageContainer}>
          <Image source={{ uri: product.image }} style={styles.image} />
        </View>
        <Text style={styles.title}>{product.title}</Text>

        <View style={styles.priceContainer}>
          <Text style={styles.price}>R{product.price}</Text>
          <Badge status={productRatingColor(product.rating.rate)} value={product.rating.rate}/>
        </View>

        <Text>Description:</Text>
        <Text>{product.description}</Text>

      </TouchableOpacity>


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
    fontSize: 30,
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
  }
})