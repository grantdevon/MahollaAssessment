import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { categories } from '../Constants/categories.constant';
import { IProduct } from '../Constants/product.interface';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/AntDesign'
import ShoppingBag from 'react-native-vector-icons/FontAwesome'

const Filter = ({ setFilteredProducts }: { setFilteredProducts: any }) => {

    const [currentCategory, setCurrentCategory] = useState('Category')
    const [showModal, setShowModal] = useState<boolean>(false)

    const { products } = useSelector(state => state.productsStore)


    const handleCategorySelect = (text: string) => {
        setCurrentCategory(text)
        filterItems(text)
        setShowModal(false)
    }

    const filterItems = (category: string) => {
        const filteredItems = products.filter((product: IProduct) => {
            return product.category === category
        })
        setFilteredProducts(filteredItems)
    }

    const resetFilter = () => {
        setCurrentCategory('Category')
        setFilteredProducts(products)
    }

    const CategoryList = () => {
        return (
            <View>
                {
                    categories.map(category => {
                        return (
                            <Text
                                key={category}
                                style={styles.text}
                                onPress={() => handleCategorySelect(category)}>
                                {category}
                            </Text>
                        )
                    })
                }
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <ShoppingBag
                    name='shopping-bag'
                    size={15}
                    color={"black"}
                />
                <Text style={styles.mainText}>Products</Text>

            </View>
            <View
                style={styles.categorySelect}>

                <Text style={styles.categoryText}>{currentCategory}</Text>

                <TouchableOpacity
                    onPress={() => setShowModal(true)}
                >
                    <Icon
                        name='caretdown'
                        size={15}
                        color={"black"}
                    />
                </TouchableOpacity>

                {
                    currentCategory !== 'Category'
                    &&
                    <TouchableOpacity
                        onPress={resetFilter}
                    >
                        <Icon
                            style={{
                                alignItems: 'center', paddingLeft: 10
                            }}
                            name='close'
                            size={15}
                            color={"black"}
                        />
                    </TouchableOpacity>
                }

            </View>

            <Modal
                visible={showModal}
                animationType='slide'
                transparent
            >
                <TouchableOpacity
                    style={styles.modalContainer}
                    onPress={() => setShowModal(false)}
                >
                    <View style={styles.modalContent}>
                        <CategoryList />
                    </View>
                </TouchableOpacity>
            </Modal>

        </View>
    )
}

export default Filter

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10,
        padding: 15
    },
    modalContainer: {
        backgroundColor: 'rgba(0,0,0,0.4)',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalContent: {
        width: 200,
        paddingVertical: 20,
        alignItems: 'center',
        backgroundColor: "white",
        borderRadius: 10
    },
    text: {
        color: 'black',
        fontSize: 20,
        paddingVertical: 10
    },
    categorySelect: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    categoryText: {
        paddingHorizontal: 10,
        color: 'grey'
    },
    mainText: {
        color: 'grey',
        paddingLeft: 10
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})