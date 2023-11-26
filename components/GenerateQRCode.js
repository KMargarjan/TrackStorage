import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import QRCode from "react-native-qrcode-svg";

const qrData = { id: 1, name: "qr1", date: "2023-11-25" };
const qrDataToString = JSON.stringify(qrData);

export default function GenerateQRCode() {
  const [title, setTitle] = useState("");

  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={() => setTitle(title)}
        value={title}
      />
      <View>
        <Button
          onPress={() => {}}
          title="Generate QR Code"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
      <Text>
        <QRCode value={qrDataToString} />;
      </Text>
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
});
