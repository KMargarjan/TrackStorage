import { useState } from "react";
import { Alert } from "react-native";
import AuthContent from "../components/Auth/AuthContent";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { login } from "../util/auth";
import { useAuth } from "../util/AuthContext";

import * as SecureStore from "expo-secure-store";

function LoginScreen() {
  const [isLoading, setIsLoading] = useState(false);
  const { setIsLogged } = useAuth();

  async function loginHandler({ email, password }) {
    setIsLoading(true);
    try {
      const token = await login(email, password);
      await SecureStore.setItemAsync("authToken", token);
      setIsLogged(true); // Update the global authentication state
    } catch (error) {
      Alert.alert(
        "Authentication failed",
        "Could not log you in. Please check credentials!"
      );
      setIsLoading(false); // Turn off loading if authentication fails
    }
  }

  if (isLoading) {
    return <LoadingOverlay message="Logging you in..." />;
  }
  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;
