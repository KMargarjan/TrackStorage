import { View, StyleSheet } from "react-native";
import { RoundedButton } from "../components/RoundedButton";

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <RoundedButton title="+" size={70} onPress={() => setQRPage(true)} />
      </View>
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
