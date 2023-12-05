// navigation/AuthenticatedStack.js
import React from "react";
import { View, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import TopTabNavigator from "./TopTabNavigator";
import ScanScreen from "../screens/ScannScreen";

const BottomTab = createBottomTabNavigator();

export default function AuthenticatedStack() {
  return (
    <View style={styles.container}>
      <BottomTab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Main") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Scan") {
              iconName = focused ? "scan" : "scan-outline";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          activeTintColor: "tomato",
          inactiveTintColor: "gray",
        })}
      >
        <BottomTab.Screen
          name="Main"
          component={TopTabNavigator}
          options={{ tabBarLabel: "Home" }}
        />
        <BottomTab.Screen name="Scan" component={ScanScreen} />
      </BottomTab.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  },
});
