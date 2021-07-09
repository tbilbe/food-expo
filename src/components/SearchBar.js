import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.background}>
      <Feather name="search" style={styles.icon} />
      <TextInput
        onEndEditing={onTermSubmit}
        onChangeText={onTermChange}
        autoCapitalize="none"
        autoCorrect={false}
        value={term}
        style={styles.input}
        placeholder="Search"
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  icon: {
    alignSelf: "center",

    fontSize: 40,
  },
  background: {
    marginTop: 10,
    backgroundColor: "#f0eeee",
    marginHorizontal: 20,
    height: 48,
    flexDirection: "row",
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#686e7d",
  },
  input: {
    flex: 1,
    paddingLeft: 10,
    fontSize: 20,
  },
});
