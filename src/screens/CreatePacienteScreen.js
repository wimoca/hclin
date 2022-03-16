import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";

function CreatePacienteScreen(props) {
  const [paciente, setPaciente] = useState({
    name: "",
    lastname: "",
    phone: "",
    id: "",
  });
  return (
    <View style={styles.container}>
      <Text>Crear Paciente</Text>
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

export default CreatePacienteScreen;
