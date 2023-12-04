import axios from "axios";

const API_KEY = "AIzaSyDeFl3TrOLl-W1EmrZKu1sVnfQK4ozOWos";

export default async function createUser(email, password) {
  const response = await axios.post(
    `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
    { email: email, password: password, returnSecureToken: true }
  );
}
