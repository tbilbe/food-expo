import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import RestaurantCard from "./RestaurantCard";
const ResultsList = ({ title, foodPlaces }) => {
  return (
    <View>
      <Text style={styles.headerStyle}>{title}</Text>
      <FlatList
        horizontal
        data={foodPlaces}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return (
            <RestaurantCard
              name={item.name}
              reviews={item.review_count}
              stars={item.rating}
              imageSrc={item.image_url}
            />
          );
        }}
      />
    </View>
  );
};

export default ResultsList;

const styles = StyleSheet.create({
  headerStyle: {
    fontSize: 25,
    marginTop: 5,
    fontWeight: "bold",
    fontFamily: "Roboto",
  },
});
