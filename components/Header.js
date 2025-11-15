import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { spacing } from "../theme/spacing";
import { typography } from "../theme/typography";
import { colors } from "../theme/colors";

export default function Header({ title, rightIcon, onRightPress }) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/logo.png")}
        style={styles.logo}
      />

      <Text style={styles.title}>{title}</Text>

      {rightIcon ? (
        <TouchableOpacity onPress={onRightPress}>
          {rightIcon}
        </TouchableOpacity>
      ) : (
        <View style={{ width: 24 }} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: spacing.md,
  },
  logo: {
    width: 34,
    height: 34,
    resizeMode: "contain",
  },
  title: {
    fontSize: typography.h2,
    fontWeight: "600",
    color: colors.textDark,
  },
});
