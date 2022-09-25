import {View, TextInput, Text, StyleSheet} from 'react-native'
import React from "react"

export const SearchBar = (props) => {
    return(
        <View style={styles.container}>
            <TextInput 
                placeholder='search podcasts'
                style={styles.input}
                value={props.searchText}
                onChangeText={(text) => props.setSearchText(text)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        margin: 25,
    },
    input:{
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10,
        borderWidth: 1,
        color: 'black'
    },
})