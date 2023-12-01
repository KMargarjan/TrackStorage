import React from "react";
import { View, Text, StyleSheet, FlatList, SafeAreaView } from "react-native";
import QRCode from "react-native-qrcode-svg";

const CardList = ({ selectedAsset, qrData }) => {
  const Card = ({ title, description, created }) => {
    return (
      <View style={styles.card}>
        <View style={styles.cardContent}>
          <Text style={styles.title}>Title: {title}</Text>
          <Text style={styles.description}>Description: {description}</Text>
          <Text style={styles.description}>Created: {created}</Text>
        </View>
        <View>
          {qrData && (
            <Text>
              <QRCode value={qrData} />
            </Text>
          )}
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={selectedAsset}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            description={item.description}
            created={item.created}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

// Styles
const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    borderRadius: 8,
    marginVertical: 5,
    marginHorizontal: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3, // for Android
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
});

export default CardList;
