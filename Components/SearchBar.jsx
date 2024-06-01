import React from "react";
import { Image, StyleSheet, TextInput, View } from "react-native";

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchbar}>
        <Image source={require("../assets/mynaui_search.png")} height={24} />
        <TextInput placeholder="Search" style={styles.input} />
      </View>
      <Image source={require("../assets/Filter.png")} width={50} height={48} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 20,
  },
  searchbar: {
    flex: 1,
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 8,
  },
  input: {
    flex: 1,
  },
});

export default SearchBar;