import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';

const Search = ({ searchText, setSearchText }: { searchText: any, setSearchText: any }) => {

    return (
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <Icon
                    name='search'
                    size={20}
                    color={"black"}
                />
                <TextInput
                    placeholder='Search'
                    clearButtonMode="always"
                    value={searchText}
                    onChangeText={setSearchText}
                />
            </View>

            {
                searchText &&
                <Icon
                    name='close'
                    size={20}
                    color={"black"}
                    onPress={() => setSearchText('')}
                />
            }

        </View>
    )
}

export default Search

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flexDirection: 'row',
        marginVertical: 10,
        marginHorizontal: 10,
        paddingHorizontal: 10,
        borderRadius: 7,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    subContainer: {
        alignItems: 'center',
        flexDirection: 'row'
    },
    image: {
        width: 20,
        height: 20
    }
})