import { FlatList, Modal, RefreshControl, StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import ProductItem from '../../Components/ProductItem.component'
import ProductModal from '../../Components/ProductModal.component'
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../../Components/Loading.component'
import Search from '../../Components/Search.component'
import { fetchProducts } from '../../Redux/Reducers/Product.reducer'
import Empty from '../../Components/Empty.component'
import Filter from '../../Components/Filter.component'

const Products = () => {

  const dispatch = useDispatch()
  const { products, loading } = useSelector(state => state.productsStore)
  const [currentProduct, setCurrentProduct] = useState(null)
  const [modalVisable, setModalVisable] = useState<boolean>(false)
  const [searchText, setSearchText] = useState<string>('')
  const [filteredProducts, setFilteredProducts] = useState(products)
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    setFilteredProducts(products)
  }, [products, loading])

  useEffect(() => {
    handleProductSearch(searchText)
  }, [searchText])

  const handleProductSearch = (text: string) => {
    const searchTextLower = text.toLowerCase();
    const filteredProducts = products.filter((product: any) => {
      const productTitleLower = product.title.toLowerCase();
      return productTitleLower.includes(searchTextLower);
    });
    setFilteredProducts(filteredProducts);
  }

  const refreshProducts = () => {
    dispatch(fetchProducts())
  }

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
      refreshProducts()
    }, 2000);
  }, []);

  if (loading) {
    return (
      <Loading text='Fetching Products' />
    )
  }

  return (
    <View style={styles.container}>
      <Filter />
      <Search searchText={searchText} setSearchText={setSearchText} />
      <FlatList
        data={filteredProducts}
        renderItem={(product) =>
          <ProductItem
            item={product.item}
            setCurrentProduct={setCurrentProduct}
            setModalVisable={setModalVisable}
            modalVisable={modalVisable}
          />}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        ListEmptyComponent={Empty}
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