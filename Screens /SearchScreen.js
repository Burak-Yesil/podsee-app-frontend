import { Text, View, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import {LinearGradient} from "expo-linear-gradient"


import { SearchBar } from '../components/SearchBar'
import ListItem from '../components/ListItem'
import { Podcasts } from '../Data/Podcasts'
import { Colors } from '../styles/styles'

const SearchScreen = () => {
  const [searchText, setSearchText] = useState("")
  console.log(searchText)

  return(
         <LinearGradient 
         colors={[Colors.primary, Colors.pistachio, Colors.pistachio, Colors.pistachio, Colors.pistachio, Colors.pistachio,]}
         start={{x:-0.1, y: 0.2}}
        end={{x:1, y:1}}
        locations={[0.01,0.25,0.3,1,1,1]}
        style={{
          padding: 10,
          flex:1,
          height:"100%",
        }}
      >
        <SafeAreaView>
        <SearchBar searchText={searchText} setSearchText={setSearchText}  />
        <ScrollView horizontal={false} >
                  {Podcasts.filter((item) => {
                    return searchText.toLowerCase() === '' ? item : item.id.toString().toLowerCase().includes(searchText)
                  }).map(podcast => 
                  
                  <TouchableOpacity key={podcast.id}>
                    <ListItem key={podcast.id} title={podcast.title_original} 
                      image={podcast.thumbnail} subTitle={podcast.podcast.publisher_original}
                      />
                  </TouchableOpacity>
                  
                    )}
        </ScrollView>
        </SafeAreaView>
        </LinearGradient>
    )
}

export default SearchScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary
  }
});
