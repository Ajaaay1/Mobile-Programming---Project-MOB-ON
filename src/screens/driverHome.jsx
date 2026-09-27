
import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
} from "react-native";

import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

import BackgroundWrap from "../components/backgroundWrap";
import Logo from "../components/logo";
import DRIVER_RIDES from "../data/driverRides";

export default function DriverHomeScreen() {
  const router = useRouter();

  const handleLogout = () => {
    Alert.alert(
      "Log Out",
      "Are you sure you want to log out?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Log Out",
          style: "destructive",
          onPress: () => router.replace("/driver/login"),
        },
      ]
    );
  };

  const renderRide = ({ item }) => (
    <TouchableOpacity
      style={styles.rideCard}
      activeOpacity={0.8}
      onPress={() => {
        console.log("Sending ID:", item.id);

        router.push({
          pathname: "/details",
          params: {
            id: String(item.id),
          },
        });
      }}
    >
      <View style={styles.rideText}>
        <Text style={styles.passenger}>
          {item.passenger}
        </Text>

        <Text style={styles.route}>
          {item.pickup} → {item.destination}
        </Text>
      </View>

      <Text style={styles.fare}>
        {item.fare}
      </Text>
    </TouchableOpacity>
  );

  return (
    <BackgroundWrap>
      <View style={styles.container}>

        {/* Top Header with Logout Icon Button */}
        <View style={styles.topBar}>
          <View style={{ width: 32 }} />

          <Logo size={60} />

          <TouchableOpacity
            style={styles.logoutBtn}
            onPress={handleLogout}
          >
            <Ionicons
              name="log-out-outline"
              size={26}
              color="#ef4444"
            />
          </TouchableOpacity>
        </View>

        <View style={styles.header}>
          <Text style={styles.title}>Driver Home</Text>
          <Text style={styles.subtitle}>
            Select a ride request to view its details.
          </Text>
        </View>

        <Text style={styles.sectionTitle}>
          Ride Requests
        </Text>

        <FlatList
          data={DRIVER_RIDES}
          keyExtractor={(item) => String(item.id)}
          renderItem={renderRide}
          contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={false}
        />

      </View>
    </BackgroundWrap>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 36,
    paddingBottom: 24,
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logoutBtn: {
    padding: 6,
  },
  header: {
    alignItems: "center",
    marginBottom: 18,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#ffffff",
    marginTop: 8,
  },
  subtitle: {
    fontSize: 13,
    color: "#cbd5e1",
    textAlign: "center",
    marginTop: 5,
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 10,
  },
  list: {
    paddingBottom: 30,
    gap: 10,
  },
  rideCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "rgba(30, 41, 59, 0.92)",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: 10,
    padding: 14,
  },
  rideText: {
    flex: 1,
    paddingRight: 12,
  },
  passenger: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#ffffff",
  },
  route: {
    fontSize: 11,
    color: "#94a3b8",
    marginTop: 4,
  },
  fare: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#38bdf8",
  },
});