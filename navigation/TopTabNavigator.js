// navigation/TopTabNavigator.js
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import HomeScreen from "../screens/HomeScreen";
import ListScreen from "../screens/ListScreen";
import SettingsScreen from "../screens/SettingsScreen";
import LogOutScreen from "../screens/LogOutScreen";

const TopTab = createMaterialTopTabNavigator();

export default function TopTabNavigator() {
  return (
    <TopTab.Navigator>
      <TopTab.Screen name="Home" component={HomeScreen} />
      <TopTab.Screen name="List" component={ListScreen} />
      <TopTab.Screen name="Settings" component={SettingsScreen} />
      <TopTab.Screen name="Log out" component={LogOutScreen} />
    </TopTab.Navigator>
  );
}
