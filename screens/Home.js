import { Text, StyleSheet, View } from "react-native";
import CardList from "../components/CardList";

export default function HomeScreen({ route }) {
  const selectedAsset = route.params?.item;

  return (
    <>
      {!selectedAsset && (
        <View style={styles.homeContainer}>
          <Text style={styles.noAssetMessage}>
            Not monitoring any asset. Tap '+' to add a asset.
          </Text>
        </View>
      )}
      {selectedAsset && (
        <View style={styles.cardContainer}>
          <CardList selectedAsset={selectedAsset} />
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    flex: 3,
  },
  noAssetMessage: {
    textAlign: "center",
    padding: 20,
    flex: 1,
  },
  button: {
    flexDirection: "row-reverse",
    padding: 20,
    flex: 0.2,
  },
  cardContainer: {
    flex: 1,
  },
});
