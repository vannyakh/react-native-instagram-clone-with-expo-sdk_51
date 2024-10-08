import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const AuthLayout = () => {
  return (
    <Stack
      initialRouteName="login"
      //   screenOptions={{
      //     headerShown: false,
      //   }}
    >
      <Stack.Screen
        name="login"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="registers/emailSignup"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="registers/phoneSignup"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="registers/createUsername"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="registers/createPassword"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="registers/verify"
        options={{
          headerShown: false,
        }}
      />

    </Stack>
  );
};

export default AuthLayout;
