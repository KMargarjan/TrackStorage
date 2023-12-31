import { useState } from "react";
import { Alert } from "react-native";
import AuthContent from "../components/Auth/AuthContent";
import { createUser } from "../util/auth";

import LoadingOverlay from "../components/ui/LoadingOverlay";

export default function SignupScreen() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  async function signUpHandler({ email, password }) {
    setIsAuthenticated(true);
    try {
      await createUser(email, password);
    } catch (error) {
      Alert.alert(
        "Authentication failed!",
        "Could not create user. Please check your input and try again!"
      );
      setIsAuthenticated(false);
    }
  }

  if (isAuthenticated) {
    return <LoadingOverlay message="Creating user..." />;
  }

  return <AuthContent onAuthenticate={signUpHandler} />;
}
