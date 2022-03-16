import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

function HeaderButton({ navigation = useNavigation() }) {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("CrearPaciente")}
      hitSlop={{ top: 10, bottom: 10, left: 30, right: 20 }}
    >
      <Text style={styles.textStyle}>+</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    color: "white",
    fontWeight: "300",
  },
  container: {},
});

export default HeaderButton;
