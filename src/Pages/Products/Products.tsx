import { FlatList, Modal, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { fetchData } from '../../Services/API/products.service'
import ProductItem from '../../Components/ProductItem.component'
import ProductModal from '../../Components/ProductModal.component'

const Products = () => {

  const [products, setProducts] = useState([])
  const [currentProduct, setCurrentProduct] = useState(null)
  const [modalVisable, setModalVisable] = useState<boolean>(false)

  useEffect(() => {
    const fetchProducts = async () => {
      fetchData().then(data => {
        console.log(data[0]);

        setProducts(data)
      }).catch(err => {
        setProducts([])
        return []
      })
    }

    fetchProducts()
  }, [])


  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={(product) => <ProductItem
          item={product.item} 
          setCurrentProduct={setCurrentProduct}
          setModalVisable={setModalVisable}
          modalVisable={modalVisable}
          />}
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