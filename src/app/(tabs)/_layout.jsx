import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#38bdf8",
        tabBarInactiveTintColor: "#94a3b8",
        tabBarStyle: {
          backgroundColor: "#1e293b",
          borderTopColor: "rgba(255, 255, 255, 0.1)",
        },
      }}
    >
      <Tabs.Screen
        name="driverHome"
        options={{
          title: "Driver Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="car-sport"
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="details"
        options={{
          title: "Details",
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="information-circle-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}