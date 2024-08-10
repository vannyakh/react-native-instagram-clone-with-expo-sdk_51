import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Redirect, router } from "expo-router";

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  React.useEffect(() => {
    router.push("/(auth)/login");
  }, []);
  return (
    <>
      <GestureHandlerRootView>
        <BottomSheetModalProvider>{children}</BottomSheetModalProvider>
      </GestureHandlerRootView>
    </>
  );
};

export default AppProvider;

const styles = StyleSheet.create({});
