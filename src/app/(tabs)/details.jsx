import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import BackgroundWrap from "../../components/backgroundWrap";
import DRIVER_RIDES from "../../data/driverRides";

export default function DriverDetailsScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams();

  const ride = DRIVER_RIDES.find((item) => String(item.id) === String(id));

  if (!ride) {
    return (
      <BackgroundWrap>
        <View style={styles.container}>
          <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color="#ffffff" />
            <Text style={styles.backText}>Back</Text>
          </TouchableOpacity>
          <Text style={styles.errorText}>Ride details not found, Click a Passenger.</Text>
        </View>
      </BackgroundWrap>
    );
  }

  return (
    <BackgroundWrap>
      <View style={styles.container}>
        <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#ffffff" />
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>

        <Text style={styles.title}>Item Details</Text>

        <View style={styles.card}>
          <Text style={styles.label}>ID: <Text style={styles.value}>{ride.id}</Text></Text>
          <Text style={styles.label}>Passenger: <Text style={styles.value}>{ride.passenger}</Text></Text>
          <Text style={styles.label}>Pickup: <Text style={styles.value}>{ride.pickup}</Text></Text>
          <Text style={styles.label}>Destination: <Text style={styles.value}>{ride.destination}</Text></Text>
          <Text style={styles.label}>Fare: <Text style={styles.fareValue}>{ride.fare}</Text></Text>
        </View>
      </View>
    </BackgroundWrap>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  backBtn: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  backText: {
    color: "#ffffff",
    fontSize: 16,
    marginLeft: 8,
    fontWeight: "bold",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 16,
  },
  card: {
    backgroundColor: "rgba(30, 41, 59, 0.92)",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: 12,
    padding: 20,
    gap: 12,
  },
  label: {
    fontSize: 15,
    color: "#94a3b8",
    fontWeight: "600",
  },
  value: {
    color: "#ffffff",
    fontWeight: "normal",
  },
  fareValue: {
    color: "#38bdf8",
    fontWeight: "bold",
  },
  errorText: {
    color: "#ef4444",
    fontSize: 16,
    marginTop: 20,
  },
});