import { Text, View, StyleSheet, Image } from 'react-native'
import React, { Component} from 'react'

const HomeHeader = ({img, title, artists}) => {
    return (
        <View style={styles.container}>
            <Image style={{height: 160, width: 160, borderRadius: 20,}} source={{uri: img}}/>
            <Text style={styles.text} numberOfLines={1} >{title}</Text>
            <Text style={styles.subText} numberOfLines={1} >{artists}</Text>
        </View>
    )
}

export default HomeHeader

const styles = StyleSheet.create({
    container: {
        flex: 1,
        overflow: 'hidden',
        minHeight: 220,
        maxHeight: 220,
        maxWidth: 160,
        marginRight: 20,
    },
    text: {
        color: 'white',
        marginTop: 10,
        fontWeight: 'bold'
    },
    subText: {
        color: 'grey',
        marginTop: 4,
        fontWeight: "800",
        alignItems: 'center',
    },
})