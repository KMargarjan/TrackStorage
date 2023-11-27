import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, TextInput, StyleSheet, Button } from "react-native";



export default function GenerateQRCode() {
  const [showGeneratedQR, setShowGeneratedQR] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [qrData, setQrData] = useState();

  const navigation = useNavigation();

  const handleAddClick = () => {
    const newQRData = {
      title: title,
      description: description,
      date: new Date().toISOString(),
    };

    const qrDataToString = JSON.stringify(newQRData);

    setQrData(qrDataToString);
    setShowGeneratedQR(true);

    navigation.navigate("List", {newQRData:newQRData});

  };

  return (
    <View>
      <View>
        <TextInput
          style={styles.input}
          onChangeText={(title) => setTitle(title)}
          value={title}
          placeholder="Title"
        />
        <TextInput
          style={styles.input}
          onChangeText={(description) => setDescription(description)}
          value={description}
          placeholder="Description"
        />
      </View>
      <View>
        <Button
          onPress={handleAddClick}
          title="Add to list QR Code"
          color="#841584"
        />
      </View>

     
    </View>
  );
}
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  qrContainer: {
    flexDirection: "column",
  },
  qr: {
    flexDirection: "row",
  },
});
