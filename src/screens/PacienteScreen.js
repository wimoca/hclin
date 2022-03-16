import React from "react";
import { Text, View, StyleSheet } from "react-native";

function PacienteScreen(props) {
  return (
    <View style={styles.container}>
      <Text>P Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default PacienteScreen;
