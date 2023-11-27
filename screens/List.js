import React, { useState, useEffect } from "react";
import CardList from "../components/CardList";
import { StyleSheet, View,Text } from "react-native";



const MyFlatList = ({ route, navigation }) => {
  const [showQRPage, setQRPage] = useState(false);
  const [listData, setListData] = useState([]);
  const [qrData,setQrData] = useState()

  useEffect(() => {
    // Check if the route has params and a specific data key
    if (route.params?.scannedData) {
      setListData([...listData, route.params.scannedData]);
    }
    if (route.params?.newQRData) {
      const dataToString = JSON.stringify(route.params.newQRData)
      setQrData(dataToString)
      setListData([...listData, route.params.newQRData]);
    }
  }, [route.params]);

  return (
    <View style={styles.container}>
      <CardList selectedAsset={listData} qrData={qrData} />
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
