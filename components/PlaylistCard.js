import { Text, View, StyleSheet, Image, Dimensions} from 'react-native'
import React, { Component} from 'react'
const width = Dimensions.get("window").width;
const PlaylistCard = ({img, title}) => {
    return (
        <View style={styles.container}>
            <Image style={{height: 60, width: 60}} source={{uri:img}} />
            <View style={styles.textCont}>
                <Text style={styles.text} numberOfLines={2}>{title}</Text>
            </View>
        </View>
    )
}

export default PlaylistCard

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: width,
        minWidth: 120,
        // maxWidth: 210, 
        maxHeight: 60,
        backgroundColor: "rgba(51,51,51,0.7)",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 4,
        overflow: 'hidden',
        margin: 4,
        // marginBottom: 8,
    },
    textCont: {
        textAlign: 'center',
        width: "55%",

    },
    text: {
        color: "white",
    },

})