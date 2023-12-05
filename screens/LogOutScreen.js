import React from "react";
import { View, Button, StyleSheet } from "react-native";
import * as SecureStore from "expo-secure-store";
import { useAuth } from "../util/AuthContext";

export default function LogOutScreen() {
  const { setIsLogged } = useAuth();

  async function removeToken() {
    try {
      await SecureStore.deleteItemAsync("authToken");
      setIsLogged(false); // Update the logged-in state
    } catch (error) {
      console.error("Error removing the auth token", error);
    }
  }

  return (
    <View style={styles.container}>
      <Button title="Log out" onPress={removeToken} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
