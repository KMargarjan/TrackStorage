import { Text, View, StyleSheet, Button } from "react-native";

export default function ScannedData({ data, onCancel, onAddToList }) {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <Text style={styles.title}>Title: {data.title}</Text>
        <Text style={styles.description}>Description: {data.description}</Text>
        <Text style={styles.description}>Scanned at: {data.created}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Cancel" onPress={onCancel} />
        <View style={styles.space} />
        <Button title="Add to list" onPress={onAddToList} />
      </View>
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    marginVertical: 5,
    marginHorizontal: 10,
    padding: 20, // Reduced padding for better layout
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
    height: 200,
  },
  cardContent: {
    flex: 1,
  },
  title: {
    fontSize: 14,
  },
  description: {
    fontSize: 14,
    color: "#333",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  space: {
    width: 20,
  },
});
