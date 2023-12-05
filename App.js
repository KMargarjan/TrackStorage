import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

import AuthStack from "./navigation/AuthStack";
import AuthenticatedStack from "./navigation/AuthenticatedStack";
import { AuthProvider, useAuth } from "./util/AuthContext"; // Ensure this path is correct

export default function App() {
  return (
    <AuthProvider>
      <StatusBar style="light" />
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </AuthProvider>
  );
}

// New component to use the context
function MainNavigator() {
  const { isLogged } = useAuth();

  return <>{!isLogged ? <AuthStack /> : <AuthenticatedStack />}</>;
}
