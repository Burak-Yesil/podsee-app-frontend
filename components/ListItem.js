import React from "react";
import { View, StyleSheet, Image, Text} from "react-native";
import AppText from "./AppText";

import Dim from '../styles/styles'

function ListItem({ title, subTitle, image }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: image}} />
      <View>
        <Text numberOfLines={1} style={styles.title}>{title.length < 40
                ? `${title}`
                : `${title.substring(0, 32)}...`}</Text>
        <Text numberOfLines={1} style={styles.subTitle}>{subTitle}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    margin: 5,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 10,
    marginRight: 10,
  },
  subTitle: {
    color: 'grey',
  },
  title: {
    fontWeight: "500",
    color: 'white'
  },
});

export default ListItem;