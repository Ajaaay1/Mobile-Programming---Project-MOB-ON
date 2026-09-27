import React from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useRouter } from "expo-router";
import BackgroundWrap from "../components/backgroundWrap";
import { RIDES } from "../data/rides";

export default function ItemsScreen() {
  const router = useRouter();

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.8}
      onPress={() => router.push(`/details/${item.id}`)}
    >
      <Text style={styles.cardTitle}>{item.name}</Text>
      <Text style={styles.cardSubtitle}>{item.vehicle} • {item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <BackgroundWrap>
      <View style={styles.container}>
        <Text style={styles.headerTitle}>Available Rides</Text>
        <Text style={styles.headerSubtitle}>Tap a ride to see its details</Text>

        <FlatList
          data={RIDES}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          contentContainerStyle={styles.list}
        />
      </View>
    </BackgroundWrap>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 60, paddingHorizontal: 20 },
  headerTitle: { fontSize: 22, fontWeight: "bold", color: "#ffffff", textAlign: "center" },
  headerSubtitle: { fontSize: 13, color: "#94a3b8", textAlign: "center", marginTop: 4, marginBottom: 16 },
  list: { gap: 10, paddingBottom: 30 },
  card: {
    backgroundColor: "rgba(30, 41, 59, 0.92)",
    padding: 16,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.2)",
  },
  cardTitle: { color: "#ffffff", fontSize: 16, fontWeight: "bold" },
  cardSubtitle: { color: "#38bdf8", fontSize: 13, marginTop: 4 },
});
