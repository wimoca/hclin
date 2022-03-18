import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

export default function InputForm() {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Test" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    width: "80%",
    borderRadius: 15,

    backgroundColor: "white",
    marginVertical: 10,
  },
});
