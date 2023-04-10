import { FlatList, Modal, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import ProductItem from '../../Components/ProductItem.component'
import ProductModal from '../../Components/ProductModal.component'
import { useSelector } from 'react-redux'
import Loading from '../../Components/Loading.component'

const Products = () => {
  
  const {products, loading} = useSelector(state => state.productsStore)
  console.log(loading);
    
  const [currentProduct, setCurrentProduct] = useState(null)
  const [modalVisable, setModalVisable] = useState<boolean>(false)

  if (loading) {
    return (
      <Loading text='Fetching Products'/>
    )
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={(product) => 
        <ProductItem
          item={product.item} 
          setCurrentProduct={setCurrentProduct}
          setModalVisable={setModalVisable}
          modalVisable={modalVisable}
          />}
          // build refresh handler
      />
      <Modal
        animationType='slide'
        visible={modalVisable}
      >
        <ProductModal
          product={currentProduct}
          setModalVisable={setModalVisable}
        />
      </Modal>
    </View>
  )
}

export default Products

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})