import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'

const Search = ({searchText, setSearchText}: {searchText:any, setSearchText: any}) => {

    return (
        <View style={styles.container}>
            <TextInput 
            placeholder='search'
            clearButtonMode="always"
            value={searchText}
            onChangeText={setSearchText}
            />
            {/* add clear icon */}
        </View>
    )
}

export default Search

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 7,
    }
})