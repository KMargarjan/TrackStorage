import React, { useState } from "react";
import {
  FlatList,
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
} from "react-native";

import { RoundedButton } from "../components/RoundedButton";

const data = [
  // { id: "1", title: "Card 1", description: "Description for card 1" },
  // { id: "2", title: "Card 2", description: "Description for card 2" },
];

const MyFlatList = ({ navigation }) => {
  const renderItem = ({ item }) => {
    return (
      <Item item={item} onPress={() => navigation.navigate("Home", { item })} />
    );
  };

  const [showQRPage, setQRPage] = useState(false);

  return (
    <View style={styles.container}>
      {data.length > 0 && (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item}
          style={styles.flatList}
        />
      )}

      {!data.length && !showQRPage && (
        <View style={styles.button}>
          <RoundedButton title="+" size={70} onPress={() => setQRPage(true)} />
        </View>
      )}
      {showQRPage && (
        <View style={styles.generateQR}>
          <Text>Generate QR Code page</Text>
        </View>
      )}
    </View>
  );
};

const Item = ({ item, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.item}>
    <Text style={styles.title}>{item.title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    padding: 8,
    marginVertical: 4,
    marginHorizontal: 8,
    marginTop: 8,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },
  flatList: {
    flex: 1,
  },
  title: {
    fontSize: 22,
  },
  button: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "flex-end",
    padding: 20,
    paddingBottom: 70,
  },
  generateQR: {
    flex: 1,
  },
});

export default MyFlatList;
