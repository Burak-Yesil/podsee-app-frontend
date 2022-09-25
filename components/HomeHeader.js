import { Text, View, StyleSheet, TouchableOpacity, } from 'react-native'
import React, { Component} from 'react'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

const HomeHeader = () => {
    return (
        <View style={styles.topCont}>
            <View>
                <Text style={styles.text}>Good Afternoon</Text>
            </View>
            <View style={styles.iconCont}>
                <TouchableOpacity>
                <MaterialCommunityIcons style={styles.icon} name="bell-outline" size={30} color="white"/>
                </TouchableOpacity>
                <TouchableOpacity>
                <MaterialCommunityIcons style={styles.icon} name="history" size={30} color="white"/>
                </TouchableOpacity>
                <TouchableOpacity>
                <MaterialCommunityIcons style={styles.icon} name="cog-outline" size={30} color="white"/>
                </TouchableOpacity>

            </View>
        </View>
    )
}

export default HomeHeader

const styles = StyleSheet.create({
    topCont : {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 40,
        justifyContent: 'space-between',
    },
    text : {
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
    },
    iconCont : {
        flexDirection:'row',
    },
    icon : {
        marginLeft: 15,
    },
    
})