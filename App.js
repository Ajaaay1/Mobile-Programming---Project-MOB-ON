import React, { useState } from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';

import LoginScreen from './screens/login';
import RegisterScreen from './screens/register';
import DriverLoginScreen from './screens/driverLogin';
import DriverRegisterScreen from './screens/driverRegister';
import ForgotPasswordScreen from './screens/forgotPassword';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('login');

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      {currentScreen === 'login' && (
        <LoginScreen
          onNavigateToRegister={() => setCurrentScreen('register')}
          onNavigateToDriverRegister={() => setCurrentScreen('driver-register')}
          onNavigateToDriverLogin={() => setCurrentScreen('driver-login')}
          onNavigateToForgotPassword={() =>
            setCurrentScreen('forgot-password')
          }
        />
      )}

      {currentScreen === 'register' && (
        <RegisterScreen
          onNavigateToLogin={() => setCurrentScreen('login')}
          onNavigateToDriverRegister={() =>
            setCurrentScreen('driver-register')
          }
        />
      )}

      {currentScreen === 'driver-login' && (
        <DriverLoginScreen
          onNavigateToDriverRegister={() =>
            setCurrentScreen('driver-register')
          }
          onNavigateToPassengerLogin={() =>
            setCurrentScreen('login')
          }
          onNavigateToForgotPassword={() =>
            setCurrentScreen('forgot-password')
          }
        />
      )}

      {currentScreen === 'driver-register' && (
        <DriverRegisterScreen
          onNavigateToLogin={() =>
            setCurrentScreen('driver-login')
          }
          onNavigateToPassengerRegister={() =>
            setCurrentScreen('register')
          }
        />
      )}

      {currentScreen === 'forgot-password' && (
        <ForgotPasswordScreen
          onBackToLogin={() => setCurrentScreen('login')}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});