import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useRouter } from "expo-router";
import Logo from "../components/logo";
import BackgroundWrap from "../components/backgroundWrap";

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <BackgroundWrap>
      <View style={styles.container}>
        {/* Main Hero Header */}
        <View style={styles.heroSection}>
          <Logo />
          <Text style={styles.title}>Welcome to MOVEON</Text>
          <Text style={styles.subtitle}>
            Your reliable transportation partner.
          </Text>
        </View>

        {/* Action Buttons at Bottom */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.primaryBtn}
            onPress={() => router.push("/login")}
            activeOpacity={0.85}
          >
            <Text style={styles.primaryBtnText}>Log In</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.secondaryBtn}
            onPress={() => router.push("/register")}
            activeOpacity={0.85}
          >
            <Text style={styles.secondaryBtnText}>Sign Up</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.driverLinkBtn}
            onPress={() => router.push("/driver/login")}
            activeOpacity={0.7}
          >
            <Text style={styles.driverLinkText}>
              Are you a driver?{" "}
              <Text style={styles.highlightText}>Driver Log In</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </BackgroundWrap>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingVertical: 48,
  },
  heroSection: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#ffffff",
    textAlign: "center",
    marginTop: 16,
  },
  subtitle: {
    fontSize: 15,
    color: "#94a3b8",
    textAlign: "center",
    marginTop: 8,
  },
  buttonContainer: {
    width: "100%",
    maxWidth: 320,
    gap: 12,
  },
  primaryBtn: {
    backgroundColor: "#0284c7",
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
    elevation: 3,
  },
  primaryBtnText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
  secondaryBtn: {
    backgroundColor: "rgba(255, 255, 255, 0.12)",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.3)",
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
  },
  secondaryBtnText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },
  driverLinkBtn: {
    marginTop: 6,
    alignItems: "center",
  },
  driverLinkText: {
    color: "#e2e8f0",
    fontSize: 13,
  },
  highlightText: {
    color: "#38bdf8",
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
});