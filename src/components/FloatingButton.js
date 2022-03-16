import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { auth } from "../config/firebase";
import colors from "../theme/colors";

function FloatingButton(props) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => auth.signOut().then(() => console.log("signed out"))}
    >
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>+</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-end",
    justifyContent: "flex-end",
    bottom: 50,
    right: 10,
  },

  textContainer: {
    position: "absolute", //dont understand why this is here, but it works..(????)
    height: 65,
    width: 65,
    backgroundColor: colors.primary,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  textStyle: {
    fontSize: 30,
    color: "white",
  },
});

export default FloatingButton;
