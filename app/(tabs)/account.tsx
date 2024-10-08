import {
  Button,
  Image,
  Modal,
  Pressable,
  RefreshControl,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Text, View } from "@/components/Themed";
import React, { useCallback, useMemo, useRef } from "react";
import { GlobleStyle } from "@/constants/GlobleStyle";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";
import { MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { linearNumberFormat } from "@/helper/formart";
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { router } from "expo-router";

const Account = () => {
  const colorScheme = useColorScheme();

  // ref
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const menuSheetRef = useRef<BottomSheetModal>(null);

  // variables
  const snapPoints = useMemo(() => ["45%"], []);
  const snapPointsMenu = useMemo(() => ["60%"], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handlePresentMenuPress = useCallback(() => {
    menuSheetRef.current?.present();
  }, []);

  // close model
  const handleCloseModalPress = useCallback(() => {
    bottomSheetModalRef.current?.dismiss();
  }, []);
  const handleCloseMenuPress = useCallback(() => {
    menuSheetRef.current?.dismiss();
  }, []);

  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  // render
  const renderBackdrop = (props: any) => (
    <BottomSheetBackdrop
      {...props}
      disappearsOnIndex={-1}
      appearsOnIndex={0}
      opacity={0.5}
    />
  );

  return (
    <View style={[GlobleStyle.container]}>
      {/* Header */}
      <SafeAreaView edges={["top"]}>
        <View style={[GlobleStyle.headerTop]}>
          <Pressable
            onPress={handlePresentModalPress}
            style={[{ flexDirection: "row", alignItems: "center" }]}
          >
            <Text style={[{ fontSize: 20, fontWeight: "600" }]}>Account</Text>
            <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />
          </Pressable>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <Pressable>
              <Image
                source={require("@/assets/images/icons/add.png")}
                style={{ width: 24, height: 24 }}
              />
            </Pressable>
            <Pressable
              onPress={handlePresentMenuPress}
              style={{
                marginLeft: 16,
                position: "relative",
              }}
            >
              <Image
                source={require("@/assets/images/icons/hambuger.png")}
                style={{ width: 24, height: 24 }}
              />
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
      {/* Body */}
      <ScrollView
        style={[GlobleStyle.container]}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={false}
            onRefresh={() => {}}
            colors={[Colors[colorScheme ?? "light"].tint]}
          />
        }
      >
        {/* profile */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 16,
            paddingVertical: 10,
            width: wp("100%"),
          }}
        >
          <View>
            <TouchableOpacity style={{ alignItems: "center" }}>
              <LinearGradient
                colors={["#C913B9", "#F9373F", "#FECD00"]}
                end={{ x: 0.1, y: 1 }}
                style={{
                  padding: 2,
                  borderRadius: 90,
                }}
              >
                <View
                  style={{
                    width: 90,
                    height: 90,
                    borderRadius: 90,
                    overflow: "hidden",
                    borderColor: "white",
                    borderWidth: 4,
                  }}
                >
                  <Image
                    source={require("@/assets/images/avatars/avata-1.jpg")}
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: 90,
                    }}
                  />
                </View>
              </LinearGradient>
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: wp(10),
            }}
          />
          <View
            style={{
              flex: 1,
              flexDirection: "row",
            }}
          >
            <View style={styles.linear}>
              <Text style={styles.linearNumber}>
                {linearNumberFormat(1000)}
              </Text>
              <Text style={styles.linearText}>Posts</Text>
            </View>
            <View style={styles.linear}>
              <Text style={styles.linearNumber}>
                {linearNumberFormat(1500000)}
              </Text>
              <Text style={styles.linearText}>Followers</Text>
            </View>
            <View style={styles.linear}>
              <Text style={styles.linearNumber}>
                {linearNumberFormat(1400)}
              </Text>
              <Text style={styles.linearText}>Following</Text>
            </View>
          </View>
        </View>
        {/* Info */}
        <View
          style={{
            paddingHorizontal: 16,
            marginTop: 8,
          }}
        >
          {/* name */}
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "600" }}>John Doe</Text>
            {/* Verify */}
            {/* <Image
              source={require("@/assets/images/icons/verify.png")}
              style={{ width: 20, height: 20 }}
            /> */}
          </View>
          {/* bio */}
          <Text style={{ fontSize: 14, color: "gray", marginTop: 4 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
          {/* follow */}
          <View
            style={{
              flexDirection: "row",
              marginTop: 8,
            }}
          >
            <TouchableOpacity
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                paddingVertical: 8,
                borderRadius: 5,
                backgroundColor: Colors[colorScheme ?? "light"].defaultButton,
              }}
            >
              <Text style={{ fontSize: 14, fontWeight: "600" }}>
                Edit Profile
              </Text>
            </TouchableOpacity>
            <View style={{ width: 8 }} />
            <TouchableOpacity
              style={{
                justifyContent: "center",
                alignItems: "center",
                width: wp(12),
                borderRadius: 5,
                backgroundColor: Colors[colorScheme ?? "light"].defaultButton,
              }}
            >
              <Image
                source={require("@/assets/images/icons/addfri.png")}
                style={{ width: 24, height: 24 }}
              />
            </TouchableOpacity>
          </View>
        </View>
        {/* My post */}
        <View
          style={{
            flex: 1,
          }}
        ></View>
      </ScrollView>

      {/* Modal Menu */}
      <BottomSheetModal
        ref={menuSheetRef}
        index={0}
        backdropComponent={renderBackdrop}
        snapPoints={snapPointsMenu}
      >
        <BottomSheetView style={styles.contentContainer}>
          <Text>Awesome 🎉</Text>
          <Pressable
            onPress={() => {
              router.push({ pathname: "/(auth)/login" });
              handleCloseMenuPress();
            }}
          >
            <Text>Login</Text>
          </Pressable>
        </BottomSheetView>
      </BottomSheetModal>

      {/* Account sheet */}
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={0}
        backdropComponent={renderBackdrop}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
      >
        <BottomSheetView style={styles.contentContainer}>
          <Text>Awesome 🎉</Text>
        </BottomSheetView>
      </BottomSheetModal>
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({
  linear: {
    flexDirection: "column",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  linearNumber: {
    fontSize: 16,
    fontWeight: "600",
  },
  linearText: {
    fontSize: 14,
    marginTop: 4,
    color: "gray",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
});
