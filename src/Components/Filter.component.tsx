import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { categories } from '../Constants/categories.constant';

const Filter = () => {

    const [currentCategory, setCurrentCategory] = useState('Category')
    const [showModal, setShowModal] = useState<boolean>(false)

    const handleCategorySelect = (text: string) => {
        setCurrentCategory(text)
        setShowModal(false)
    }

    const CategoryList = () => {
        return (
            <View>
                {
                    categories.map(category => {
                        return (
                            <Text
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
            <Text>Categories</Text>
            <Text onPress={() => setShowModal(true)}>{currentCategory}</Text>
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
        marginHorizontal: 10
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
    }
})