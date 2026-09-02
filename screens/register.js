import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Animated,
  Alert,
  ImageBackground,
  Pressable,
} from 'react-native';

import { useState, useRef } from 'react';
import { Eye, EyeOff } from 'lucide-react-native';

export default function App() {
  // Animation
  const scale = useRef(new Animated.Value(1)).current;

  // Input states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');

  // Password visibility states
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Save function with password match check
  const handlesave = () => {
    if (password !== confirmpassword) {
      Alert.alert('Error', 'Passwords do not match.');
      return;
    }

    console.log({
      name,
      email,
      password,
      confirmpassword,
    });

    Alert.alert(
      'Registered!',
      'Your information has been registered successfully.'
    );
  };

  // Submit animation
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
      source={require('./mobon.jpg')}
      resizeMode="cover"
      style={styles.image}
    >
      <View style={styles.container}>
        <View style={styles.form}>
          {/* Full Name */}
          <Text style={styles.label}>Full Name</Text>

          <TextInput
            style={styles.input}
            placeholder="Jose Delacruz"
            placeholderTextColor="#ccc"
            onChangeText={setName}
            value={name}
          />

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

          {/* Confirm Password */}
          <Text style={styles.label}>Confirm Password</Text>

          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.passwordInput}
              placeholder="Confirm Password"
              placeholderTextColor="#ccc"
              onChangeText={setConfirmPassword}
              value={confirmpassword}
              secureTextEntry={!showConfirmPassword}
            />

            <Pressable
              style={({ pressed }) => [
                styles.eyeButton,
                { opacity: pressed ? 0.5 : 1.0 },
              ]}
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
          <Animated.View
            style={{
              transform: [{ scale: scale }],
            }}
          >
            <TouchableOpacity
              style={styles.submitBtn}
              onPress={handleSubmit}
              activeOpacity={0.8}
            >
              <Text style={styles.fontColor}>Submit</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  form: {
    backgroundColor: 'rgba(128, 128, 128, 0.9)',
    padding: 20,
    borderRadius: 10,
    gap: 10,
    width: 300,
  },

  label: {
    color: 'white',
    fontWeight: 'bold',
  },

  input: {
    borderWidth: 1,
    borderColor: 'white',
    padding: 10,
    borderRadius: 5,
    color: 'white',
  },

  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 5,
  },

  passwordInput: {
    flex: 1,
    padding: 10,
    color: 'white',
  },

  eyeButton: {
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  fontColor: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },

  submitBtn: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
});