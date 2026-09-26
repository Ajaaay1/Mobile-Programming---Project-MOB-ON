import React from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useRouter } from "expo-router";
import BackgroundWrap from "../../components/backgroundWrap";
import Logo from "../../components/logo";
import DRIVER_RIDES from "../../data/driverRides";

export default function DriverHomeScreen() {
  const router = useRouter();

  const renderRide = ({ item }) => (
    <TouchableOpacity
      style={styles.rideCard}
      activeOpacity={0.8}
      onPress={() => router.push(`/driver/details/${item.id}`)}
    >
      <View style={styles.rideText}>
        <Text style={styles.passenger}>{item.passenger}</Text>
        <Text style={styles.route}>
          {item.pickup} → {item.destination}
        </Text>
      </View>
      <Text style={styles.fare}>{item.fare}</Text>
    </TouchableOpacity>
  );

  return (
    <BackgroundWrap>
      <View style={styles.container}>
        <View style={styles.header}>
          <Logo size={70} />
          <Text style={styles.title}>Driver Home</Text>
          <Text style={styles.subtitle}>Select a ride request to view its details.</Text>
        </View>

        <Text style={styles.sectionTitle}>Ride Requests</Text>

        <FlatList
          data={DRIVER_RIDES}
          keyExtractor={(item) => item.id}
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
