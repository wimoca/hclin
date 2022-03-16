import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Alert,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import colors from "../theme/colors";
import { StatusBar } from "expo-status-bar";

export default function SignUpScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onHandleSignUp = () => {
    if (email !== "" && password !== "") {
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => console.log("Signup success"))
        .catch((err) => Alert.alert("Signup error", err.message));
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Text style={styles.titleStyle}>Sign Up</Text>

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
      <TouchableOpacity style={styles.buttonStyle} onPress={onHandleSignUp}>
        <Text style={styles.buttonTextStyle}>Sign Up</Text>
      </TouchableOpacity>
      <View style={{ marginTop: 10, flexDirection: "row" }}>
        <Text style={{ color: "white" }}>Already have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={{ color: colors.primary }}> Log In</Text>
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
