import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import BackgroundWrap from "../../../components/backgroundWrap";
import DRIVER_RIDES from "../../../data/driverRides";

export default function DriverRideDetailsScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const rideId = Array.isArray(id) ? id[0] : id;
  const ride = DRIVER_RIDES.find((item) => item.id === rideId);

  if (!ride) {
    return (
      <BackgroundWrap>
        <View style={styles.container}>
          <View style={styles.card}>
            <Text style={styles.label}>Ride Request</Text>
            <Text style={styles.title}>Ride Not Found</Text>
            <Text style={styles.description}>
              No ride request was found for ID: {rideId || "unknown"}
            </Text>
            <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
              <Text style={styles.backText}>← Back</Text>
            </TouchableOpacity>
          </View>
        </View>
      </BackgroundWrap>
    );
  }

  return (
    <BackgroundWrap>
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.label}>Ride Request Details</Text>
          <Text style={styles.idText}>ID: {ride.id}</Text>
          <Text style={styles.title}>{ride.passenger}</Text>

          <View style={styles.row}>
            <Text style={styles.rowLabel}>Pickup</Text>
            <Text style={styles.rowValue}>{ride.pickup}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.rowLabel}>Destination</Text>
            <Text style={styles.rowValue}>{ride.destination}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.rowLabel}>Fare</Text>
            <Text style={styles.rowValue}>{ride.fare}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.rowLabel}>Distance</Text>
            <Text style={styles.rowValue}>{ride.distance}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.rowLabel}>Status</Text>
            <Text style={styles.rowValue}>{ride.status}</Text>
          </View>

          <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
            <Text style={styles.backText}>← Back to Driver Home</Text>
          </TouchableOpacity>
        </View>
      </View>
    </BackgroundWrap>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  card: {
    width: "100%",
    maxWidth: 340,
    backgroundColor: "rgba(30, 41, 59, 0.92)",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: 12,
    padding: 22,
    gap: 8,
  },
  label: {
    color: "#38bdf8",
    fontSize: 13,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  idText: {
    color: "#94a3b8",
    fontSize: 12,
  },
  title: {
    color: "#ffffff",
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 6,
    marginBottom: 8,
  },
  description: {
    color: "#cbd5e1",
    fontSize: 14,
    lineHeight: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopWidth: 1,
    borderTopColor: "rgba(255,255,255,0.15)",
    paddingVertical: 8,
    gap: 12,
  },
  rowLabel: {
    color: "#94a3b8",
    fontSize: 13,
    flex: 1,
  },
  rowValue: {
    color: "#ffffff",
    fontSize: 13,
    fontWeight: "bold",
    flex: 1,
    textAlign: "right",
  },
  backBtn: {
    marginTop: 16,
    alignItems: "center",
  },
  backText: {
    color: "#38bdf8",
    fontSize: 14,
    fontWeight: "bold",
  },
});
