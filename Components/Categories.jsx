import React from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";

const Categories = () => {
  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>
        Categories
      </Text>
      <FlatList
        style={styles.flatlist}
        horizontal
        data={[
          {
            key: "Exercise",
            tasks: "12 Tasks",
            image: require("../assets/woman.png"),
          },
          {
            key: "Study",
            tasks: "12 Tasks",
            image: require("../assets/woman2.png"),
          },
        ]}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>{item.key}</Text>
            <Text style={{ fontSize: 12, fontWeight: 400 }}>{item.tasks}</Text>
            <Image
              source={item.image}
              style={{ resizeMode: "contain", width: 120, height: 120 }}
            />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 180,
    width: 190,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    marginRight: 10,
  },
  flatlist: {},
});

export default Categories;