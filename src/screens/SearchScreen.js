import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import ResultsList from "../components/ResultsList";
import useResults from "../hooks/useResults";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, errMsg, results] = useResults();
  console.log(
    "🚀 ~ file: SearchScreen.js ~ line 10 ~ SearchScreen ~ results",
    results
  );

  const filterResultsByPrice = (price) => {
    return results.filter((el) => {
      return el.price === price;
    });
  };

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      <Text>we have found: {results.length} results</Text>
      {errMsg ? <Text>{errMsg}</Text> : null}
      <ResultsList
        foodPlaces={filterResultsByPrice("£")}
        title="Cost Effective"
      />
      <ResultsList
        foodPlaces={filterResultsByPrice("££")}
        title="Bit Pricier"
      />
      <ResultsList
        foodPlaces={filterResultsByPrice("£££")}
        title="Big Spender"
      />
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
