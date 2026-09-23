import React, { useState } from "react";
import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useRouter } from "expo-router";
import { Eye, EyeOff } from "lucide-react-native";
import Logo from "../components/logo";
import BackgroundWrap from "../components/backgroundWrap";

export default function RegisterScreen() {
  const router = useRouter();

  // Input states
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Password visibility states
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Form submission handler
  const handleSave = () => {
    if (!name.trim()) {
      Alert.alert("Missing Field", "Please enter your full name.");
      return;
    }

    if (!password) {
      Alert.alert("Missing Field", "Please enter a password.");
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match!");
      return;
    }

    console.log({ name, password });

    Alert.alert(
      "Registered!",
      "Your information has been registered successfully."
    );
  };

  return (
    <BackgroundWrap>
      <View style={styles.container}>
        <View style={styles.form}>
          <Logo />

          {/* Full Name */}
          <Text style={styles.label}>Full Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Jose Delacruz"
            placeholderTextColor="#ccc"
            onChangeText={setName}
            value={name}
          />

          {/* Password */}
          <Text style={styles.label}>Password</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.passwordInput}
              placeholder="Password"
              placeholderTextColor="#ccc"
              onChangeText={setPassword}
              value={password}
              secureTextEntry={!showPassword}
            />
            <Pressable
              style={styles.eyeButton}
              onPress={() => setShowPassword(!showPassword)}
              hitSlop={10}
            >
              {showPassword ? (
                <Eye color="white" size={20} />
              ) : (
                <EyeOff color="white" size={20} />
              )}
            </Pressable>
          </View>

          {/* Confirm Password */}
          <Text style={styles.label}>Confirm Password</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.passwordInput}
              placeholder="Confirm Password"
              placeholderTextColor="#ccc"
              onChangeText={setConfirmPassword}
              value={confirmPassword}
              secureTextEntry={!showConfirmPassword}
            />
            <Pressable
              style={styles.eyeButton}
              onPress={() => setShowConfirmPassword(!showConfirmPassword)}
              hitSlop={10}
            >
              {showConfirmPassword ? (
                <Eye color="white" size={20} />
              ) : (
                <EyeOff color="white" size={20} />
              )}
            </Pressable>
          </View>

          {/* Submit Button */}
          <TouchableOpacity
            style={styles.submitBtn}
            onPress={handleSave}
            activeOpacity={0.8}
          >
            <Text style={styles.fontColor}>Submit</Text>
          </TouchableOpacity>

          {/* Switch to Passenger Login */}
          <TouchableOpacity
            style={styles.switchBtn}
            onPress={() => router.push("/")}
          >
            <Text style={styles.switchText}>
              Already have an account?{" "}
              <Text style={styles.linkText}>Log In</Text>
            </Text>
          </TouchableOpacity>

          {/* Switch to Driver Registration */}
          <TouchableOpacity
            style={styles.switchBtn}
            onPress={() => router.push("/driver/register")}
          >
            <Text style={styles.switchText}>
              Want to earn with us?{" "}
              <Text style={styles.linkText}>Register as Driver</Text>
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
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    backgroundColor: "rgba(128, 128, 128, 0.9)",
    padding: 20,
    borderRadius: 10,
    gap: 10,
    width: 300,
  },
  label: {
    color: "white",
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    borderColor: "white",
    padding: 10,
    borderRadius: 5,
    color: "white",
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 5,
  },
  passwordInput: {
    flex: 1,
    padding: 10,
    color: "white",
  },
  eyeButton: {
    paddingHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  fontColor: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
  submitBtn: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  switchBtn: {
    marginTop: 10,
    alignItems: "center",
  },
  switchText: {
    color: "white",
    fontSize: 13,
    textAlign: "center",
  },
  linkText: {
    color: "#38bdf8",
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
});