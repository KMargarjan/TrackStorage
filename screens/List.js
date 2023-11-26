import React, { useState } from "react";
import {
  FlatList,
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
} from "react-native";

import GenerateQRCode from "../components/GenerateQRCode";

// const data = [
//   { id: "1", title: "Card 1", description: "Description for card 1" },
//   { id: "2", title: "Card 2", description: "Description for card 2" },
// ];

const MyFlatList = ({ route, navigation }) => {
  const [showQRPage, setQRPage] = useState(false);
  const [listData, setListData] = useState([]);

  const renderItem = ({ item }) => {
    setListData(route.params.scannedData);
    return (
      <Item item={item} onPress={() => navigation.navigate("Home", { item })} />
    );
  };

  return (
    <View style={styles.container}>
      {listData.length > 0 && (
        <FlatList
          data={listData}
          renderItem={renderItem}
          keyExtractor={(item) => item}
          style={styles.flatList}
        />
      )}

      {showQRPage && (
        <View style={styles.generateQR}>
          <GenerateQRCode value="https://www.npmjs.com/package/react-native-qrcode-svg" />
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
