import { useState, useRef } from 'react';
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
import { Eye, EyeOff } from 'lucide-react-native';

export default function App() {
  const scale = useRef(new Animated.Value(1)).current;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handlesave = () => {
    console.log({ email, password });
    Alert.alert('Log in Successfully!', 'okay na ya.');
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
      source={require('./mobon.jpg')}
      resizeMode="cover"
      style={styles.image}
    >
      <View style={styles.container}>
        <View style={styles.form}>
          <Text style={styles.label}>Email</Text>

          <TextInput
            style={styles.input}
            placeholder="Email@example.com"
            placeholderTextColor="#ccc"
            keyboardType="email-address"
            onChangeText={setEmail}
            value={email}
          />

          <Text style={styles.label}>Password</Text>

          {/* Password input with eye button */}
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

          <Animated.View
            style={{
              transform: [{ scale }],
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

  // Password box
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 5,
  },

  // Password text input
  passwordInput: {
    flex: 1,
    padding: 10,
    color: 'white',
  },

  // Eye button
  eyeButton: {
    padding: 10,
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