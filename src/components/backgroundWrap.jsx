import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';

export default function BackgroundWrapper({ children, style }) {
  return (
    <ImageBackground
      source={require("../../assets/mobon.jpg")}
      resizeMode="cover"
      style={[styles.background, style]}
    >
      {children}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});