import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!email || !password) {
      alert("Please fill in all fields.");
      return;
    } else {
      navigation.navigate("Dashboard");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.facebookOut}>
          <Image
            source={require("./facebook.png")}
            style={styles.facebookInn}
          />
        </View>

        <View style={styles.input}>
          <View style={styles.inputBoxes}>
            <Text style={styles.requireMsg}>Email:</Text>
            <TextInput
              style={styles.inputBox}
              placeholder="Enter email"
              id="email"
              value={email}
              onChangeText={setEmail}
            />
          </View>
          <View style={styles.inputBoxes}>
            <Text style={styles.requireMsg}>Password:</Text>
            <TextInput
              style={styles.inputBox}
              placeholder="Enter password"
              secureTextEntry
              id="password"
              value={password}
              onChangeText={setPassword}
            />
          </View>
          <Button title="Login" onPress={handleLogin} />
          <TouchableOpacity
            onPress={() => navigation.navigate("SignUp")}
            style={styles.createButton}
          >
            <Text style={styles.createButtonText}>Create Account</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  facebookOut: {
    width: width * 0.2,
    height: width * 0.2,
    alignSelf: "center",
    justifyContent: "center",
    marginBottom: height * 0.02,
  },
  facebookInn: {
    width: "100%",
    height: "100%",
  },
  createButton: {
    backgroundColor: "green",
    marginTop: height * 0.02,
    color: "white",
    textAlign: "center",
    fontFamily: "Tahoma",
    height: height * 0.06,
    alignItems: "center",
    justifyContent: "center",
  },
  createButtonText: {
    color: "white",
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  innerContainer: {
    backgroundColor: "rgb(17, 18, 19)",
    width: "90%",
    padding: 16,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  inputBoxes: {
    marginBottom: 12,
  },
  inputBox: {
    borderWidth: 1,
    borderColor: "#696969",
    borderRadius: 5,
    color: "#8a8a8a",
    padding: 8,
  },
  requireMsg: {
    color: "white",
    textTransform: "uppercase",
    marginBottom: 8,
  },
});
