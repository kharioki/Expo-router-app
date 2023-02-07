import { Tabs } from "expo-router";
import { AntDesign, FontAwesome } from "@expo/vector-icons";

export default () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#6146c6",
        tabBarInactiveTintColor: "#1e2632",
      }}
    >
      <Tabs.Screen
        name="feed"
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" size={24} color={color} />
          ),
          title: "Feed",
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="search1" size={24} color={color} />
          ),
          title: "Search",
        }}
      />
      <Tabs.Screen
        name="messages"
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="comments" size={24} color={color} />
          ),
          headerShown: false,
        }}
      />
    </Tabs>
  );
};
