import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, errMsg, results] = useResults();

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      <Text>we have found: {results.length} results</Text>
      {errMsg ? <Text>{errMsg}</Text> : null}
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
