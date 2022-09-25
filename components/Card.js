import React from "react";
import { View, Image, StyleSheet } from "react-native";

import AppText from "./AppText";

function Card({ title, subTitle, imageUrl, imageWidth, imageHeight, resizeMode, borderRadius}) {
            
  return (
    <View style={styles.card}>
      <Image style={{
        height: imageHeight,
        width: imageWidth,
        resizeMode,
        borderRadius,
      }} source={{uri: imageUrl}} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: 'white',
    marginBottom: 20,
    overflow: "hidden",
  },
  detailsContainer: {
    padding: 20,
  },
  subTitle: {
    color: 'grey',
    fontWeight: "bold",
  },
  title: {
    marginBottom: 7,
  },
});

export default Card;
