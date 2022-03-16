import React, { useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import { auth } from "../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import colors from "../theme/colors";
import { StatusBar } from "expo-status-bar";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onHandleLogin = () => {
    if (email !== "" && password !== "") {
      signInWithEmailAndPassword(auth, email, password)
        .then(() => console.log("Login success"))
        .catch((err) => Alert.alert("Login error", err.message));
    }
  };
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Text style={styles.titleStyle}>Log In</Text>

      <TextInput
        style={styles.inputStyle}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
        textContentType="emailAddress"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.inputStyle}
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry={true}
        textContentType="password"
      />
      <TouchableOpacity style={styles.buttonStyle} onPress={onHandleLogin}>
        <Text style={styles.buttonTextStyle}>Log In</Text>
      </TouchableOpacity>
      <View style={{ marginTop: 10, flexDirection: "row" }}>
        <Text style={{ color: "white" }}>Don't have an accout?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
          <Text style={{ color: colors.primary }}> Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputStyle: {
    padding: 17,
    //borderWidth: 1,
    //borderColor: colors.primary,
    margin: 10,
    borderRadius: 10,
    width: "80%",
    fontSize: 17,
    backgroundColor: "white",
  },
  titleStyle: {
    fontSize: 36,
    fontWeight: "bold",
    color: colors.primary,
    paddingBottom: 20,
  },
  buttonStyle: {
    padding: 20,
    borderWidth: 1,
    borderColor: colors.primary,
    margin: 10,
    borderRadius: 10,
    width: "80%",
    backgroundColor: colors.primary,
  },
  buttonTextStyle: {
    fontWeight: "bold",
    fontSize: 18,
    alignSelf: "center",
    color: "white",
  },
});
