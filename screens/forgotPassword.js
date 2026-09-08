import { useState } from "react";
import {
  Alert,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function ForgotPasswordScreen({ onBackToLogin }) {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleChangePassword = () => {
    if (!newPassword || !confirmPassword) {
      Alert.alert("Missing Fields", "Please enter both passwords.");
      return;
    }

    if (newPassword !== confirmPassword) {
      Alert.alert("Password Error", "Passwords do not match.");
      return;
    }

    Alert.alert(
      "Password Changed",
      "Your password has been successfully changed.",
      [
        {
          text: "OK",
          onPress: onBackToLogin,
        },
      ]
    );
  };

  return (
    <ImageBackground
      source={require("./mobon.jpg")}
      resizeMode="cover"
      style={styles.image}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.form}>

          <Text style={styles.title}>Forgot Password</Text>

          <Text style={styles.subtitle}>
            Enter your new password below.
          </Text>

          <Text style={styles.label}>New Password</Text>

          <TextInput
            style={styles.input}
            placeholder="New Password"
            placeholderTextColor="#ccc"
            secureTextEntry
            value={newPassword}
            onChangeText={setNewPassword}
          />

          <Text style={styles.label}>Confirm Password</Text>

          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            placeholderTextColor="#ccc"
            secureTextEntry
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />

          <TouchableOpacity
            style={styles.changeBtn}
            onPress={handleChangePassword}
          >
            <Text style={styles.buttonText}>
              Change Password
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.backBtn}
            onPress={onBackToLogin}
          >
            <Text style={styles.backText}>
              ← Back to Login
            </Text>
          </TouchableOpacity>

        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  form: {
    backgroundColor: "rgba(30, 41, 59, 0.92)",
    padding: 22,
    borderRadius: 12,
    width: 320,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.2)",
  },

  title: {
    color: "#ffffff",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 8,
  },

  subtitle: {
    color: "#cbd5e1",
    fontSize: 13,
    textAlign: "center",
    marginBottom: 18,
  },

  label: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 13,
    marginBottom: 6,
    marginTop: 8,
  },

  input: {
    borderWidth: 1,
    borderColor: "#ffffff",
    padding: 11,
    borderRadius: 6,
    color: "#ffffff",
    backgroundColor: "rgba(0, 0, 0, 0.25)",
  },

  changeBtn: {
    backgroundColor: "#0284c7",
    padding: 12,
    borderRadius: 6,
    marginTop: 20,
  },

  buttonText: {
    color: "#ffffff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 15,
  },

  backBtn: {
    marginTop: 16,
    alignItems: "center",
  },

  backText: {
    color: "#38bdf8",
    fontSize: 14,
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
});