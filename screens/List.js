import React from "react";
import { FlatList, Text, TouchableOpacity, StyleSheet } from "react-native";

const data = [
  { id: "1", title: "Card 1", description: "Description for card 1" },
  { id: "2", title: "Card 2", description: "Description for card 2" },
];

const MyFlatList = ({ navigation }) => {
  const renderItem = ({ item }) => {
    return (
      <Item item={item} onPress={() => navigation.navigate("Home", { item })} />
    );
  };

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item}
    />
  );
};

const Item = ({ item, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.item}>
    <Text style={styles.title}>{item.title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  item: {
    padding: 8,
    marginVertical: 4,
    marginHorizontal: 8,
    marginTop: 8,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },
  title: {
    fontSize: 22,
  },
});

export default MyFlatList;
