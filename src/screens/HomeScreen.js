import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

import FloatingButton from "../components/FloatingButton";

//screen components have the navigation prop.
function HomeScreen({ navigation }) {
  return (
    <>
      <View style={styles.container}>
        <Text>Home Screen</Text>
        <Button
          title="P screen"
          onPress={() => navigation.navigate("Paciente")}
        />
      </View>
      <FloatingButton />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default HomeScreen;
