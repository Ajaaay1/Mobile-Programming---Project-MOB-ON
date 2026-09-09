import React, { useState } from "react";
import {
    Alert,
    ImageBackground,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    Pressable
} from "react-native";
import { Eye, EyeOff } from "lucide-react-native";

export default function DriverRegisterScreen({
  onNavigateToLogin,
  onNavigateToPassengerRegister,
}) {

  const [name, setName] = useState("");
  const [midName, setMidName] = useState("");
  const [lastName, setLastName] = useState("");
  const [contactInfo, setContactInfo] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [license, setLicense] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleBirthdateChange = (text) => {
    const cleaned = text.replace(/[^0-9]/g, "");
    let formatted = cleaned;
    if (cleaned.length > 2 && cleaned.length <= 4) {
      formatted = `${cleaned.slice(0, 2)}/${cleaned.slice(2)}`;
    } else if (cleaned.length > 4) {
      formatted = `${cleaned.slice(0, 2)}/${cleaned.slice(2, 4)}/${cleaned.slice(4, 8)}`;
    }
    setBirthdate(formatted);
  };

  const handlePickLicense = () => {
    Alert.alert(
      "License Attached",
      "Driver's License copy (drivers_license_front.jpg) attached successfully.",
    );
    setLicense({ name: "drivers_license_front.jpg" });
  };

  const handlesave = () => {
    if (!name.trim() || !lastName.trim()) {
      Alert.alert(
        "Missing Field",
        "Please enter your First Name and Last Name.",
      );
      return;
    }

    if (!contactInfo.trim()) {
      Alert.alert("Missing Field", "Please enter your contact information.");
      return;
    }

    if (!birthdate.trim() || birthdate.length < 10) {
      Alert.alert(
        "Invalid Birthdate",
        "Please enter your birthdate in MM/DD/YYYY format.",
      );
      return;
    }

    if (!license) {
      Alert.alert(
        "Missing License",
        "Please attach a copy of your driver's license.",
      );
      return;
    }

    if (!email.trim()) {
      Alert.alert("Missing Field", "Please enter your email address.");
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

    console.log({
      role: "driver",
      name,
      midName,
      lastName,
      contactInfo,
      birthdate,
      license: license.name,
      email,
      password,
    });

    Alert.alert(
      "Driver Account Created!",
      `Welcome Driver ${name} ${lastName}! Your registration application has been submitted successfully.`,
    );
  };

  return (
    <ImageBackground
      source={require("./mobon.jpg")}
      resizeMode="cover"
      style={styles.image}
    >
      <SafeAreaView style={styles.safeArea}>
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.form}>
            <Text style={styles.headerTitle}>Driver Registration</Text>
            <Text style={styles.headerSubtitle}>
              Create an account as Driver
            </Text>

            <Text style={styles.label}>First Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Juan"
              placeholderTextColor="#ccc"
              onChangeText={setName}
              value={name}
            />

            <Text style={styles.label}>Middle Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Santos"
              placeholderTextColor="#ccc"
              onChangeText={setMidName}
              value={midName}
            />

            <Text style={styles.label}>Last Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Dela Cruz"
              placeholderTextColor="#ccc"
              onChangeText={setLastName}
              value={lastName}
            />

            <Text style={styles.label}>Contact Info</Text>
            <TextInput
              style={styles.input}
              placeholder="0917 123 4567"
              placeholderTextColor="#ccc"
              keyboardType="phone-pad"
              onChangeText={setContactInfo}
              value={contactInfo}
            />

            <Text style={styles.label}>Birthdate (MM/DD/YYYY)</Text>
            <TextInput
              style={styles.input}
              placeholder="MM/DD/YYYY"
              placeholderTextColor="#ccc"
              keyboardType="numeric"
              maxLength={10}
              onChangeText={handleBirthdateChange}
              value={birthdate}
            />

            <Text style={styles.label}>Copy of License</Text>
            <TouchableOpacity
              style={[
                styles.licenseBox,
                license ? styles.licenseBoxActive : null,
              ]}
              onPress={handlePickLicense}
              activeOpacity={0.7}
            >
              <Text style={styles.licenseIcon}>{license ? "✅" : "🪪"}</Text>
              <View style={styles.licenseTextWrapper}>
                <Text style={styles.licenseTitle}>
                  {license ? "License Attached" : "Attach Driver’s License"}
                </Text>
                <Text style={styles.licenseSubtitle}>
                  {license ? license.name : "Tap to upload front copy photo"}
                </Text>
              </View>
              {license && (
                <TouchableOpacity
                  onPress={() => setLicense(null)}
                  style={styles.licenseRemoveBtn}
                >
                  <Text style={styles.licenseRemoveText}>✕</Text>
                </TouchableOpacity>
              )}
            </TouchableOpacity>

            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="driver@example.com"
              placeholderTextColor="#ccc"
              keyboardType="email-address"
              autoCapitalize="none"
              onChangeText={setEmail}
              value={email}
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

            <TouchableOpacity
              style={styles.submitBtn}
              onPress={handlesave}
              activeOpacity={0.8}
            >
              <Text style={styles.fontColor}>Submit</Text>
            </TouchableOpacity>

            {onNavigateToLogin && (
              <TouchableOpacity
                style={styles.switchBtn}
                onPress={onNavigateToLogin}
              >
                <Text style={styles.switchText}>
                  Already have a driver account?{" "}
                  <Text style={styles.linkText}>Driver Log In</Text>
                </Text>
              </TouchableOpacity>
            )}

            {onNavigateToPassengerRegister && (
              <TouchableOpacity
                style={styles.secondarySwitchBtn}
                onPress={onNavigateToPassengerRegister}
              >
                <Text style={styles.secondarySwitchText}>
                  Register as Passenger instead
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}


const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
  },

  safeArea: {
    flex: 1,
  },

  scrollContainer: {
    paddingVertical: 30,
    alignItems: "center",
    justifyContent: "center",
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

  licenseBox: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: "#38bdf8",
    borderRadius: 6,
    padding: 10,
    backgroundColor: "rgba(56, 189, 248, 0.1)",
  },

  licenseBoxActive: {
    borderColor: "#4ade80",
    backgroundColor: "rgba(74, 222, 128, 0.15)",
    borderStyle: "solid",
  },

  licenseIcon: {
    fontSize: 24,
    marginRight: 10,
  },

  licenseTextWrapper: {
    flex: 1,
  },

  licenseTitle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 13,
  },

  licenseSubtitle: {
    color: "#cbd5e1",
    fontSize: 11,
  },

  licenseRemoveBtn: {
    padding: 6,
  },

  licenseRemoveText: {
    color: "#f87171",
    fontWeight: "bold",
    fontSize: 16,
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

  eyeText: {
    fontSize: 20,
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

  secondarySwitchBtn: {
    marginTop: 4,
    alignItems: "center",
  },

  secondarySwitchText: {
    color: "#94a3b8",
    fontSize: 12,
    textDecorationLine: "underline",
  },
});