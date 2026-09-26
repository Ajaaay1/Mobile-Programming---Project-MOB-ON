import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import BackgroundWrap from "../components/backgroundWrap";
import { RIDES } from "../data/rides";

export default function ItemDetailsScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  const ride = RIDES.find((r) => r.id === id);

  return (
    <BackgroundWrap>
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.title}>Ride Details</Text>

          {ride ? (
            <>
              <Text style={styles.label}>ID</Text>
              <Text style={styles.value}>{ride.id}</Text>

              <Text style={styles.label}>Name</Text>
              <Text style={styles.value}>{ride.name}</Text>

              <Text style={styles.label}>Driver</Text>
              <Text style={styles.value}>{ride.driver}</Text>

              <Text style={styles.label}>Vehicle</Text>
              <Text style={styles.value}>{ride.vehicle}</Text>

              <Text style={styles.label}>Price</Text>
              <Text style={styles.value}>{ride.price}</Text>

              <Text style={styles.label}>Description</Text>
              <Text style={styles.value}>{ride.description}</Text>
            </>
          ) : (
            <Text style={styles.value}>No ride found for ID: {id}</Text>
          )}

          <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
            <Text style={styles.backText}>← Back</Text>
          </TouchableOpacity>
        </View>
      </View>
    </BackgroundWrap>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20 },
  card: {
    backgroundColor: "rgba(30, 41, 59, 0.92)",
    padding: 22,
    borderRadius: 12,
    width: 320,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.2)",
  },
  title: { color: "#ffffff", fontSize: 22, fontWeight: "bold", textAlign: "center", marginBottom: 12 },
  label: { color: "#38bdf8", fontWeight: "bold", fontSize: 12, marginTop: 10 },
  value: { color: "#ffffff", fontSize: 15, marginTop: 2 },
  backBtn: { marginTop: 20, alignItems: "center" },
  backText: { color: "#38bdf8", fontSize: 14, fontWeight: "bold", textDecorationLine: "underline" },
})