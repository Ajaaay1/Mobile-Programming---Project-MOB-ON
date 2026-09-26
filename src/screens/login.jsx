import React, { useState } from "react";
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useRouter } from "expo-router";
import Logo from "../components/logo";
import BackgroundWrap from "../components/backgroundWrap";

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSave = () => {
    if (!email.trim() || !password) {
      Alert.alert("Missing Field", "Please fill in all fields.");
      return;
    }
    Alert.alert("Log in Successfully!", "Welcome back.", [
      {
        text: "OK",
        onPress: () => router.replace("/home"),
      },
    ]);
  };

  return (
    <BackgroundWrap>
      <View style={styles.container}>
        <View style={styles.form}>
          <Logo />
          <Text style={styles.headerTitle}>Login to MoveOn</Text>

          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Email@example.com"
            placeholderTextColor="#ccc"
            onChangeText={setEmail}
            value={email}
            autoCapitalize="none"
            keyboardType="email-address"
          />

          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#ccc"
            onChangeText={setPassword}
            value={password}
            secureTextEntry
          />

          <TouchableOpacity
            style={styles.forgotPasswordBtn}
            onPress={() => router.push("/forgot-password")}
          >
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.submitBtn} onPress={handleSave}>
            <Text style={styles.fontColor}>Log In</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.switchBtn}
            onPress={() => router.push("/register")}
          >
            <Text style={styles.switchText}>
              Don't have an account? <Text style={styles.linkText}>Register</Text>
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.switchBtn}
            onPress={() => router.push("/driver/login")}
          >
            <Text style={styles.switchText}>
              Are you a driver? <Text style={styles.linkText}>Driver Log In</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </BackgroundWrap>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  form: { backgroundColor: "rgba(128, 128, 128, 0.9)", padding: 20, borderRadius: 10, gap: 10, width: 300 },
  headerTitle: { fontSize: 25, fontWeight: "bold", color: "white", textAlign: "center" },
  label: { color: "white", fontWeight: "bold" },
  input: { borderWidth: 1, borderColor: "white", padding: 10, borderRadius: 5, color: "white" },
  forgotPasswordBtn: { alignSelf: "flex-end" },
  forgotPasswordText: { color: "#38bdf8", fontSize: 13, textDecorationLine: "underline" },
  submitBtn: { backgroundColor: "blue", padding: 10, borderRadius: 5, marginTop: 10 },
  fontColor: { color: "white", textAlign: "center", fontWeight: "bold" },
  switchBtn: { marginTop: 8, alignItems: "center" },
  switchText: { color: "white", fontSize: 13 },
  linkText: { color: "#38bdf8", fontWeight: "bold", textDecorationLine: "underline" },
});