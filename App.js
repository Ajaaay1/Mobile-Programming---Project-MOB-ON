import React, { useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import LoginScreen from './screens/login';
import RegisterScreen from './screens/register';
import DriverLoginScreen from './screens/driverLogin';
import DriverRegisterScreen from './screens/driverRegister';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('login');

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      {currentScreen === 'login' && (
        <LoginScreen
          onNavigateToRegister={() => setCurrentScreen('register')}
          onNavigateToDriverRegister={() => setCurrentScreen('driver-register')}
          onNavigateToDriverLogin={() => setCurrentScreen('driver-login')}
        />
      )}

      {currentScreen === 'register' && (
        <RegisterScreen
          onNavigateToLogin={() => setCurrentScreen('login')}
          onNavigateToDriverRegister={() => setCurrentScreen('driver-register')}
        />
      )}

      {currentScreen === 'driver-login' && (
        <DriverLoginScreen
          onNavigateToDriverRegister={() => setCurrentScreen('driver-register')}
          onNavigateToPassengerLogin={() => setCurrentScreen('login')}
        />
      )}

      {currentScreen === 'driver-register' && (
        <DriverRegisterScreen
          onNavigateToLogin={() => setCurrentScreen('driver-login')}
          onNavigateToPassengerRegister={() => setCurrentScreen('register')}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});