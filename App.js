import { Text, View } from 'react-native'
import React, { Component, StyleSheet} from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native' 
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from "react-native-vector-icons/MaterialIcons"

import HomeScreen from "./Screens /HomeScreen"
import PlayerScreen from "./Screens /PlayerScreen"
import SearchScreen from "./Screens /SearchScreen"

import { Colors } from './styles/styles'

const Tab = createBottomTabNavigator();

export default function App() {
  return(

    <NavigationContainer>
        <Tab.Navigator initialRouteName='Home'
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            height: 95,
            paddingTop: 10,
            backgroundColor: Colors.primary,
            borderTopWidth: 0,
          },
          tabBarLabelStyle:{
            marginBottom: 5,
            paddingBottom: 5,
            fontSize: 10,
            fontWeight: "bold",
          },
          tabBarActiveTintColor:"white",
          tabBarInactiveTintColor: "black",
        }}
        >
            <Tab.Screen name="Home" component={HomeScreen} 
              options={{
                tabBarIcon: ({color, size}) => (
                  <MaterialCommunityIcons name="home" color={color} size={30}/>
                )
              }} 
            />
            <Tab.Screen name="Search" component={SearchScreen} 
              options={{
                tabBarIcon: ({color, size}) => (
                  <MaterialIcons name="search" color={color} size={30}/>
                )
              }} 
            />
            <Tab.Screen name="Player" component={PlayerScreen}
              options={{
                tabBarIcon: ({color, size}) => (
                  <MaterialCommunityIcons name="play-circle" color={color} size={30}/>
                )
              }} 
            />
        </Tab.Navigator>
     </NavigationContainer>

  )
}

