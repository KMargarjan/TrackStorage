import "react-native-gesture-handler";
import * as React from "react";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import HomeScreen from "./screens/Home";
import ListScreen from "./screens/List";
import SettingsScreen from "./screens/Settings";
import ScanScreen from "./screens/ScannQR";

const TopTab = createMaterialTopTabNavigator();
const BottomTab = createBottomTabNavigator();

function TopTabNavigator() {
  return (
    <TopTab.Navigator>
      <TopTab.Screen name="Home" component={HomeScreen} />
      <TopTab.Screen name="List" component={ListScreen} />
      <TopTab.Screen name="Settings" component={SettingsScreen} />
    </TopTab.Navigator>
  );
}

export default function App({ navigator }) {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <BottomTab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "Main") {
                iconName = focused ? "home" : "home-outline";
              } else if (route.name === "Scan") {
                iconName = focused ? "scan" : "scan-outline";
              }
              // You can return any component that you like here
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: "tomato",
            inactiveTintColor: "gray",
          }}
        >
          <BottomTab.Screen
            name="Main"
            component={TopTabNavigator}
            options={{ tabBarLabel: "Home" }}
            onPress={() => navigator.navigate("Home")}
          />
          <BottomTab.Screen name="Scan" component={ScanScreen} />
          {/* Only the "Scan" button is in the bottom tab */}
        </BottomTab.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  },
});
