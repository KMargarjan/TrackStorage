import React, { useState,useEffect } from "react";
import CardList from "../components/CardList";
import {
  FlatList,
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
} from "react-native";

import GenerateQRCode from "../components/GenerateQRCode";

const MyFlatList = ({ route, navigation }) => {
  const [showQRPage, setQRPage] = useState(false);
  const [listData, setListData] = useState([]);



    useEffect(() => {
    // Check if the route has params and a specific data key
      if (route.params?.scannedData) {
      setListData([...listData,route.params.scannedData]);
    }
    }, [route.params]);
  
  return (
    <View style={styles.container}>
        <CardList selectedAsset={listData} />
      

      {showQRPage && (
        <View style={styles.generateQR}>
          <GenerateQRCode value="https://www.npmjs.com/package/react-native-qrcode-svg" />
        </View>
      )}
    </View>
  );
};

// const Item = ({ item, onPress }) => (
//   <TouchableOpacity onPress={onPress} style={styles.item}>
//     <Text style={styles.title}>{item.title}</Text>
//   </TouchableOpacity>
// );

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
