import { Image, StyleSheet } from "react-native";

export default function Logo({ size = 120, style }) {
  return (
    <Image
      source={require("../assets/logo.png")}
      style={[styles.logo, { width: size, height: size }, style]}
      resizeMode="contain"
    />
  );
}

const styles = StyleSheet.create({
  logo: {
    alignSelf: "center",
    marginBottom: 0, 
  },
});