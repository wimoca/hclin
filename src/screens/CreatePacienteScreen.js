import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  ScrollView,
  Button,
} from "react-native";
import InputForm from "../components/InputForm";

function CreatePacienteScreen(props) {
  const [paciente, setPaciente] = useState({
    name: "",
    lastname: "",
    phone: "",
    id: "",
  });
  const onHandleInput = (inputField, value) => {
    setPaciente({ ...paciente, [inputField]: value });
  };
  return (
    <View style={styles.container}>
      <Text>Crear Paciente</Text>
      <View style={styles.input}>
        <TextInput
          placeholder="Nombre"
          onChangeText={(value) => onHandleInput("name", value)}
        />
      </View>

      <View style={styles.input}>
        <TextInput
          placeholder="Apellido"
          onChangeText={(value) => onHandleInput("lastname", value)}
        />
      </View>

      <View style={styles.input}>
        <TextInput
          placeholder="Telefono"
          keyboardType="number-pad"
          onChangeText={(value) => onHandleInput("phone", value)}
        />
      </View>

      <View style={styles.input}>
        <TextInput
          placeholder="CI"
          onChangeText={(value) => onHandleInput("id", value)}
        />
      </View>
      <Button title="Save" onPress={() => console.log(paciente)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    justifyContent: "center",
    //alignItems: "center",
    height: 50,
    width: "80%",
    borderRadius: 15,
    backgroundColor: "white",
    marginVertical: 10,
    paddingLeft: 20,
  },
});

export default CreatePacienteScreen;
