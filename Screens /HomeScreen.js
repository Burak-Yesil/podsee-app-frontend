import { Text, View, StyleSheet, ScrollView, ShadowPropTypesIOS, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import {SafeAreaView} from "react-native-safe-area-context"
import {LinearGradient} from "expo-linear-gradient"

import Header from "../components/HomeHeader"
import PlaylistCard from "../components/PlaylistCard"
import ShowCard from "../components/ShowCard"
import TrendingCard from "../components/TrendingCard"
import MixCard from "../components/MixCard"

//import { Podcasts } from '../Data/Data'
import {Podcasts} from '../Data/Podcasts'
import {TopPodcasts} from  '../Data/TopPodcasts'
import { Colors } from '../styles/styles'


const HomeScreen = ({navigation}) => {
  
  useEffect(() =>{
    navigation.setOptions({
      headerShown: false
    })
  },[]
  )

  return(
    
    <View style={styles.container}>
      <LinearGradient 
        colors={[Colors.pistachio, Colors.pistachio, Colors.pistachio, Colors.pistachio, Colors.pistachio, Colors.pistachio,]}
        start={{x:-0.1, y: 0.2}}
        end={{x:1, y:1}}
        locations={[0.01,0.2,0.3,1,1,1]}
        style={{
          padding: 10,
          flex:1,
          height:"100%",
        }}
      >
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.subContainer}>
          <Header />
          <View style={styles.topCardContainer}>
          {/* <FlatList
            columnWrapperStyle={{justifyContent: 'space-between'}}
            data={TopPodcasts}
            numColumns={2}
            renderItem={(podcast) => {
                return (
                  <PlaylistCard key={podcast.id} title={podcast.title_original} 
                            img={podcast.thumbnail}
                          />
                );
              }}
            /> */}
            {TopPodcasts.map(podcast =>
                  <PlaylistCard key={podcast.id} title={podcast.title_original} 
                    img={podcast.thumbnail}
                  />
              )}
          </View>
          <View style={styles.showContainer}>
              <Text style={styles.text}> Podcasts to Try</Text>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              {Podcasts.map(podcast =>
                <TouchableOpacity key={podcast.id} onPress={() => console.log(podcast.id)}>
                  <ShowCard key={podcast.id} title={podcast.title_original} 
                    img={podcast.thumbnail} artists={podcast.podcast.publisher_original}
                  />
                </TouchableOpacity>
              )}          
              </ScrollView>
          </View>
          <View style={styles.bestContainer}>
                <Text style={styles.text} > Top Podcasts</Text>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                  {Podcasts.map(podcast =>
                  <TouchableOpacity key={podcast.id}>
                    <MixCard key={podcast.id} title={podcast.title_original} 
                      img={podcast.thumbnail} artists={podcast.podcast.publisher_original}
                      />
                  </TouchableOpacity>
                    )}
                </ScrollView>
          </View>
        </View>
      </ScrollView>
      </LinearGradient>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7FFFD4',
  },
  subContainer: {
    paddingLeft: 15,
    paddingRight: 15,
  },
  cardContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    maxHeight: 210,
  },
  topCardContainer: {
    flex: 1,
    display: "flex",
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  showContainer: {
    marginTop: 30,  
    flex: 1,
    minHeight: 60,

  },

})