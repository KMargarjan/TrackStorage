import { StyleSheet, View } from "react-native";
import { useState } from "react";
import { RoundedButton } from "../components/RoundedButton";
import GenerateQRCode from "../components/GenerateQRCode";

export default function SettingsScreen() {
  const [showQRPage, setShowQRPage] = useState();
  return (
    <View style={styles.container}>
      {!showQRPage && (
        <View style={styles.button}>
          <RoundedButton
            title="+"
            size={70}
            onPress={() => setShowQRPage(true)}
          />
        </View>
      )}

      {showQRPage && (
        <View style={styles.generateQR}>
          <GenerateQRCode value="https://www.npmjs.com/package/react-native-qrcode-svg" />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "flex-end",
    padding: 20,
    paddingBottom: 70,
  },
});
