import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import QRCode from "react-native-qrcode-svg";

export default function GenerateQRCode({ navigator }) {
  const [showGeneratedQR, setShowGeneratedQR] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [qrData, setQrData] = useState();

  const handleAddClick = ({ navigator }) => {
    const newQRData = {
      title: title,
      description: description,
      created: new Date().toISOString(),
    };

    const qrDataToString = JSON.stringify(newQRData);

    setQrData(qrDataToString);
    setShowGeneratedQR(true);

    navigator.navigate("List", qrDataToString);
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

      {showGeneratedQR && (
        <View style={styles.qrContainer}>
          <Text>Title: {title}</Text>
          <Text>Description: {description}</Text>
          <Text style={styles.qr}>
            <QRCode value={qrData} />
          </Text>
        </View>
      )}
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
