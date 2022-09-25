
import * as React from 'react';
import { FlatList, Image, Animated, Text, View, Dimensions, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
const { width, height } = Dimensions.get('screen');
import Slider from '@react-native-community/slider';
import Ionicons from '@expo/vector-icons/Ionicons';

import Card from '../components/Card';
import { Colors } from '../styles/styles'

const data = [
    'https://play-lh.googleusercontent.com/aFWiT2lTa9CYBpyPjfgfNHd0r5puwKRGj2rHpdPTNrz2N9LXgN_MbLjePd1OTc0E8Rl1?compress=1&resize=1200x1200',
    'https://thumbor.forbes.com/thumbor/fit-in/x/https://www.forbes.com/advisor/ca/wp-content/uploads/2022/05/ethereum-1.jpeg?compress=1&resize=1200x1200',
    'https://m.media-amazon.com/images/M/MV5BMjA1MjE2MTQ2MV5BMl5BanBnXkFtZTcwMjE5MDY0Nw@@._V1_UY1200_CR84,0,630,1200_AL_.jpg?compress=1&resize=1200x1200',
    'https://idsb.tmgrup.com.tr/ly/uploads/images/2020/04/17/thumbs/800x531/31299.jpg?compress=1&resize=1200x1200',
    'https://www.thebalance.com/thmb/PogN1Qi5PHmMwNnl30rU_aftfUI=/2121x1414/filters:fill(auto,1)/wallstreet-be6e21ad26e546dd8b015d7be5d71528.jpg?compress=1&resize=1200x1200',
    'https://sportshub.cbsistatic.com/i/r/2022/04/22/ae7de0d3-5bf5-4647-9eea-6a7a66855591/thumbnail/1200x675/376b7c751c38d7b1146d5beee9bbd6dd/mike-tyson.jpg',
    'https://assets.intersystems.com/26/bd/6a6aa762425f87ad7d5c2fe65f8c/awslogo-image.jpg?compress=1&resize=1200x1200',
    'https://www.travelandleisure.com/thmb/a8SnCCmu5kSm8OLGeHBZoD0pBNY=/735x0/new-york-city-evening-NYCTG0221-52492d6ccab44f328a1c89f41ac02aea.jpg?compress=1&resize=1200x1200'

];

const imageW = width * 0.7;
const imageH = imageW * 1.54;


function PlayerScreen (props){


    const scrollX = React.useRef(new Animated.Value(0)).current
    return (
        <View style={{ flex: 1, backgroundColor: '#000' }}>
            <View
            style={[StyleSheet.absoluteFillObject]}
            >
                {data.map((image, index) =>{
                    const inputRange = [
                        (index-1)*width,
                        index*width,
                        (index+1)* width,
                    ]

                    const opacity = scrollX.interpolate({
                        inputRange,
                        outputRange: [0, 1, 0]
                    })
                    return <Animated.Image 
                    key={index.toString()}
                    source={{uri: image}}
                    style={[
                        StyleSheet.absoluteFillObject,
                        {opacity}
                    ]}
                    blurRadius={40}
                    />
                })}
            </View>
            <SafeAreaView>

            <Animated.FlatList 
            data={data}
            onScroll={Animated.event(
                [{nativeEvent: {contentOffset: {x: scrollX}}}],
                {useNativeDriver: true}
            )}
            keyExtractor={(_,index) => index.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            renderItem={({item}) => {
                return <View style={{width, justifyContent: 'center', alignItems:'center', marginTop:20}}>       
                    <Card 
                        title="Title"
                        subTitle='Subtitle'
                        imageUrl= {item}
                        imageWidth= {imageW}
                        imageHeight= {imageH*.8}
                        resizeMode= 'cover'
                        borderRadius={16}
                    />
                 
                </View>
            }}
            />
            </SafeAreaView>
        <View style={styles.playerContainer}>
            <Text style={styles.title}>Podcast Episode Title</Text>
            <Text style={styles.artist}>Podcast Name</Text>
            <Slider 
                style={styles.progressContainer}
                value={10}
                minimumValue={0}
                maximumValue={100}
                thumbTintColor={Colors.primary}
                minimumTrackTintColor={Colors.primary}
                maximumTrackTintColoe="#FFF"
                onSlidingComplete={()=>{}}
            />
            <View style={styles.progressLabelContainer}>
                <Text style={styles.progressLevelText}>0:00</Text>
                <Text style={styles.progressLevelText}>3:55</Text>
            </View> 
            <View style={styles.musicControls}>
                <TouchableOpacity onPress={()=>{console.log("skip back")}}>
                <Ionicons name="play-skip-back" size={40} color={Colors.white} />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{console.log("pause")}}>
                    <Ionicons name="play-circle" size={50} color={Colors.white} />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{console.log("skip forward")}}>
                    <Ionicons name="play-skip-forward" size={40} color={Colors.white} />
                </TouchableOpacity>
            </View>
         </View>





        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center', 
        color: '#EEEEEE',
    },
    artist: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center', 
        color: '#EEEEEE',
    },
    playerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 50,
    },
    progressContainer: {
        marginTop: "-30",
        width: 350,
        height: 40,
        marginTop: 25,
        flexDirection: 'row',
    },
    progressLabelContainer:{
        width: 340,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    progressLevelText:{
        color: "#98FF98",
        fontWeight: 'bold', 
    },
    musicControls: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
})


export default PlayerScreen;

  