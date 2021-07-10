import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
const RestaurantCard = ({ name, reviews, stars, imageSrc }) => {
  return (
    <View>
      <Image style={styles.imageStyle} source={{ uri: imageSrc }} />
      <Text>{name}</Text>
      <Text>{stars} stars</Text>
      <Text>{reviews} reviews</Text>
    </View>
  );
};

export default RestaurantCard;

const styles = StyleSheet.create({
  imageStyle: {
    height: 175,
    width: 175,
    borderRadius: 7,
    marginHorizontal: 10,
  },
});
