import { useRef, useState } from "react";
import {
  Alert,
  Animated,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Eye, EyeOff } from "lucide-react-native";

export default function LoginScreen({
  onNavigateToRegister,
  onNavigateToDriverRegister,
  onNavigateToDriverLogin,
}) {
  const scale = useRef(new Animated.Value(1)).current;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handlesave = () => {
    if (!email.trim() || !password) {
      Alert.alert("Missing Field", "Please fill in all fields.");
      return;
    }

    console.log({ email, password });
    Alert.alert("Log in Successfully!", "Welcome back.");
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
      handlesave();
    });
  };

  return (
    <ImageBackground
      source={require("./mobon.jpg")}
      resizeMode="cover"
      style={styles.image}
    >
      <View style={styles.container}>
        <View style={styles.form}>
          <Text style={styles.headerTitle}>MOVE ON</Text>

          {/* Email */}
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Email@example.com"
            placeholderTextColor="#ccc"
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={setEmail}
            value={email}
          />

          {/* Password input with eye button */}
          <Text style = {styles.label}>Password</Text>
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
              style={({ pressed }) => [
                styles.eyeButton,
                { opacity: pressed ? 0.5 : 1.0 },
              ]}
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


          {/* Submit Button */}
          <Animated.View style={{ transform: [{ scale }] }}>
            <TouchableOpacity
              style={styles.submitBtn}
              onPress={handleSubmit}
              activeOpacity={0.8}
            >
              <Text style={styles.fontColor}>Log In</Text>
            </TouchableOpacity>
          </Animated.View>

          {/* Navigation Links */}
          {onNavigateToRegister && (
            <TouchableOpacity
              style={styles.switchBtn}
              onPress={onNavigateToRegister}
            >
              <Text style={styles.switchText}>
                Don't have an account?{" "}
                <Text style={styles.linkText}>Register</Text>
              </Text>
            </TouchableOpacity>
          )}

          {onNavigateToDriverLogin && (
            <TouchableOpacity
              style={styles.switchBtn}
              onPress={onNavigateToDriverLogin}
            >
              <Text style={styles.switchText}>
                Are you a driver?{" "}
                <Text style={styles.linkText}>Driver Log In</Text>
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
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

  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginBottom: 5,
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
    padding: 10,
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
    marginTop: 8,
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