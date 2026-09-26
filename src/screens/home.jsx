import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useRouter } from "expo-router";
import Logo from "../components/logo";
import BackgroundWrap from "../components/backgroundWrap";

export default function HomeScreen() {
  const router = useRouter();

  const handleLogout = () => {
    router.replace("/login");
  };

  return (
    <BackgroundWrap>
      <View style={styles.container}>
        <View style={styles.content}>
          <Logo size={90} />
          <Text style={styles.title}>Welcome to MOVEON</Text>
          <Text style={styles.subtitle}>You are logged in as a rider.</Text>

          <TouchableOpacity
            style={styles.logoutBtn}
            onPress={handleLogout}
            activeOpacity={0.8}
          >
            <Text style={styles.logoutText}>Log Out</Text>
          </TouchableOpacity>
        </View>
      </View>
    </BackgroundWrap>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
  },
  content: {
    width: "100%",
    maxWidth: 320,
    alignItems: "center",
  },
  title: {
    fontSize: 27,
    fontWeight: "bold",
    color: "#ffffff",
    textAlign: "center",
    marginTop: 12,
  },
  subtitle: {
    fontSize: 14,
    color: "#cbd5e1",
    textAlign: "center",
    marginTop: 6,
    marginBottom: 24,
  },
  logoutBtn: {
    width: "100%",
    backgroundColor: "#0284c7",
    paddingVertical: 13,
    borderRadius: 8,
    alignItems: "center",
  },
  logoutText: {
    color: "#ffffff",
    fontSize: 15,
    fontWeight: "bold",
  },
});
