import * as React from "react";
// import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import HomeScreen from "./screens/Home";
import ListScreen from "./screens/List";
import SettingsScreen from "./screens/Settings";

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="List" component={ListScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
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
