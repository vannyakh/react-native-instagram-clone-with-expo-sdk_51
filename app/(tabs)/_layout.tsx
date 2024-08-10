import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import { Image, Pressable } from "react-native";

import Colors from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";
import { useClientOnlyValue } from "@/components/useClientOnlyValue";
import { View } from "@/components/Themed";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: useClientOnlyValue(false, true),
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          title: "Home",
          tabBarIcon: ({ color, size, focused }) => (
            <Image
              source={
                focused
                  ? require("@/assets/images/icons/home_activ.png")
                  : require("@/assets/images/icons/home.png")
              }
              style={{ width: 24, height: 24 }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarIcon: ({ color, size, focused }) => (
            <Image
              source={
                focused
                  ? require("@/assets/images/icons/explo_activ.png")
                  : require("@/assets/images/icons/explo.png")
              }
              style={{ width: 24, height: 24 }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="add"
        options={{
          title: "Add",
          tabBarIcon: ({ color, size, focused }) => (
            <Image
              source={require("@/assets/images/icons/add.png")}
              style={{ width: 24, height: 24 }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="reels"
        options={{
          title: "Reels",
          tabBarIcon: ({ color, size, focused }) => (
            <Image
              source={
                focused
                  ? require("@/assets/images/icons/reels_activ.png")
                  : require("@/assets/images/icons/reels.png")
              }
              style={{ width: 24, height: 24 }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: "Account",
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => (
            <View
              style={{
                position: "relative",
                borderRadius: 24 / 2,
                overflow: "hidden",
                borderColor: Colors[colorScheme ?? "light"].tint,
                borderWidth: focused ? 1 : 0,
              }}
            >
              <Image
                source={require("@/assets/images/avatars/avata-1.jpg")}
                style={{ width: 24, height: 24 }}
              />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}
