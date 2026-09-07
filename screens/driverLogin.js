import React, { useRef, useState } from "react";
import {
  Alert,
  Animated,
  ImageBackground,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Eye, EyeOff } from "lucide-react-native";

export default function DriverLoginScreen({
  onNavigateToDriverRegister,
  onNavigateToPassengerLogin,
}) {
  const scale = useRef(new Animated.Value(1)).current;

  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSave = () => {
    if (!emailOrPhone.trim() || !password) {
      Alert.alert(
        "Missing Field",
        "Please enter your Driver Email or Phone and Password.",
      );
      return;
    }

    console.log({ role: "driver", emailOrPhone, password });

    Alert.alert(
      "Driver Log in Successfully!",
      "Welcome back, Driver! Ready to accept rides.",
    );
  };

  const handleSubmit = () => {
    Animated.sequence([
      Animated.timing(scale, {
        toValue: 0.85,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(scale, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start(() => {
      handleSave();
    });
  };

  return (
    <ImageBackground
      source={require("./mobon.jpg")}
      resizeMode="cover"
      style={styles.image}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.form}>
          <Text style={styles.headerTitle}>Driver Portal</Text>
          <Text style={styles.headerSubtitle}>Log in to start driving</Text>

          <Text style={styles.label}>Driver Email or Phone</Text>
          <TextInput
            style={styles.input}
            placeholder="driver@example.com / 0917..."
            placeholderTextColor="#ccc"
            autoCapitalize="none"
            keyboardType="email-address"
            onChangeText={setEmailOrPhone}
            value={emailOrPhone}
          />

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

          <Animated.View style={{ transform: [{ scale }] }}>
            <TouchableOpacity
              style={styles.submitBtn}
              onPress={handleSubmit}
              activeOpacity={0.8}
            >
              <Text style={styles.fontColor}>Driver Log In</Text>
            </TouchableOpacity>
          </Animated.View>

          {onNavigateToDriverRegister && (
            <TouchableOpacity
              style={styles.switchBtn}
              onPress={onNavigateToDriverRegister}
            >
              <Text style={styles.switchText}>
                New driver?{" "}
                <Text style={styles.linkText}>Register as Driver</Text>
              </Text>
            </TouchableOpacity>
          )}

          {onNavigateToPassengerLogin && (
            <TouchableOpacity
              style={styles.secondarySwitchBtn}
              onPress={onNavigateToPassengerLogin}
            >
              <Text style={styles.secondarySwitchText}>
                Switch to Passenger Login
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justify: "center",
    alignItems: "center",
  },

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  form: {
    backgroundColor: "rgba(30, 41, 59, 0.92)",
    padding: 22,
    borderRadius: 12,
    gap: 10,
    width: 320,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.2)",
  },

  headerTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#ffffff",
    textAlign: "center",
  },

  headerSubtitle: {
    fontSize: 13,
    color: "#38bdf8",
    textAlign: "center",
    marginBottom: 6,
  },

  label: {
    color: "white",
    fontWeight: "bold",
    fontSize: 13,
  },

  input: {
    borderWidth: 1,
    borderColor: "white",
    padding: 10,
    borderRadius: 6,
    color: "white",
    backgroundColor: "rgba(0, 0, 0, 0.25)",
  },

  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 6,
    backgroundColor: "rgba(0, 0, 0, 0.25)",
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
    fontSize: 15,
  },

  submitBtn: {
    backgroundColor: "#0284c7",
    padding: 12,
    borderRadius: 6,
    marginTop: 8,
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

  secondarySwitchBtn: {
    marginTop: 8,
    alignItems: "center",
  },

  secondarySwitchText: {
    color: "#94a3b8",
    fontSize: 12,
    textDecorationLine: "underline",
  },
});