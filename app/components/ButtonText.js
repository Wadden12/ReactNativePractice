import React from "react";
import { Text, StyleSheet, Platform } from "react-native";
import colors from "../config/colors";
function ButtonText({ children }) {
  return <Text style={styles.text}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: colors.white,
    textTransform: "uppercase",
    fontWeight: "bold",
    ...Platform.select({
      ios: {
        fontSize: 20,
        fontFamily: "Avenir",
      },
      android: {
        fontSize: 18,
        fontFamily: "Roboto",
      },
    }),
  },
});

export default ButtonText;
