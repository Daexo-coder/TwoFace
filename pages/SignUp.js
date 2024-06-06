
import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  Image,
  Dimensions,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage"; // Import for AsyncStorage

export class Client {
  constructor(username, phoneNumber, email, password) {
    this.username = username;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.password = password;
  }

  async saveToStorage() {
    try {
      const clientData = JSON.stringify(this); // Convert object to JSON string
      await AsyncStorage.setItem("@ClientData", clientData); // Store data with key
      console.log("Client data saved successfully!");
    } catch (error) {
      console.error("Error saving client data:", error);
    }
  }
}

export default function SignUp({ navigation }) {
  const [username, setUsername] = useState(""); // Use state for input fields
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleCreate = async () => {
    if (!username || !phoneNumber || !email || !password) {
      alert("Please fill in all fields.");
      return;
    }

    const client = new Client(username, phoneNumber, email, password); // Create Client instance
    await client.saveToStorage(); // Save data to AsyncStorage

    navigation.navigate("Login"); // Navigate to Login screen (optional)
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
            <Text style={styles.requireMsg}>Username:</Text>
            <TextInput
              style={styles.inputBox}
              placeholder="Enter username"
              id="username"
              value={username}
              onChangeText={setUsername}
            />
          </View>

          <View style={styles.inputBoxes}>
            <Text style={styles.requireMsg}>Phone number:</Text>
            <TextInput
              style={styles.inputBox}
              placeholder="Enter Phone Number"
              id="PhoneNumber"
              value={phoneNumber}
              onChangeText={setPhoneNumber}
            />
          </View>

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
          <Button title="Create" onPress={handleCreate} />
        </View>
      </View>
    </View>
  );
}

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  requireMsg: {
    color: "white",
    textTransform: "uppercase",
    marginBottom: 8,
  },
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
    width: "100%",
  },
});

