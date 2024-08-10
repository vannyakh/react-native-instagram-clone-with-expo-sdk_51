import {
    Image,
    StyleSheet,
    Text,
    TextInput,
    TouchableHighlight,
    View,
  } from "react-native";
  import React from "react";
  import { LinearGradient } from "expo-linear-gradient";
  import { SafeAreaView } from "react-native-safe-area-context";
  import Colors from "@/constants/Colors";
  import { useColorScheme } from "@/components/useColorScheme";
  import { router } from "expo-router";
  import { MaterialIcons } from "@expo/vector-icons";
  import { TouchableOpacity } from "react-native-gesture-handler";
  const Verify = () => {const colorScheme = useColorScheme();
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={[
            "rgba(255, 255, 255, 0.21)",
            "rgba(240, 232, 244, 0.43)",
            "rgba(235, 225, 241, 0.99)",
            "rgba(240, 232, 244, 0.62)",
            "rgba(252, 251, 253, 0.14)",
            "rgba(255, 255, 255, 0.00)",
          ]}
          start={[0.76, 0]}
          end={[0.58, 1]}
          style={StyleSheet.absoluteFill}
        />
        <LinearGradient
          colors={["#FFF", "#D0EBFA", "#E8F2FB"]}
          start={[0, -0.0266]}
          end={[1, 0.9459]}
          style={StyleSheet.absoluteFill}
        />
        <SafeAreaView style={styles.body}>
          {/* header */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingVertical: 12,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                router.back();
              }}
            >
              <MaterialIcons
                name="arrow-back-ios"
                size={24}
                color={Colors[colorScheme ?? "light"].text}
                onPress={() => router.back()}
              />
            </TouchableOpacity>
          </View>
          {/* Container */}
          <View
            style={{
              flex: 1,
            }}
          >
            <Text
              style={{
                fontSize: 24,
                fontWeight: "bold",
                color: Colors[colorScheme ?? "light"].text,
              }}
            >
                Verify your {`phone number`}
            </Text>
            <Text
              style={{
                fontSize: 16,
                marginVertical: 10,
                color: Colors[colorScheme ?? "light"].text,
              }}
            >
                Enter the code we just texted you to verify your phone number {`+234 812 345 6789`}
            </Text>
            {/* form */}
            {/* input group */}
            <View
              style={[
                styles.inputFile,
                {
                  marginTop: 20,
                  backgroundColor: Colors[colorScheme ?? "light"].background,
                  borderColor: Colors[colorScheme ?? "light"].tabIconDefault,
                },
              ]}
            >
              {/* label */}
              <Text
                style={{
                  color: Colors[colorScheme ?? "light"].gray500,
                  fontSize: 12,
                }}
              >
                Code
              </Text>
              {/* input */}
              <TextInput
                placeholder="12345678"
                style={{
                  color: Colors[colorScheme ?? "light"].text,
                  paddingVertical: 4,
                  fontSize: 16,
                }}
                keyboardType="number-pad"
              />
            </View>
            {/* button */}
            <TouchableHighlight
              style={{
                backgroundColor: Colors[colorScheme ?? "light"].primaryColor,
                paddingVertical: 14,
                borderRadius: 40,
                marginTop: 16,
              }}
              underlayColor={Colors[colorScheme ?? "light"].secondaryColorHover}
              onPress={() => {
                console.log("Log in");
                
              }}
            >
              <Text
                style={{
                  color: Colors[colorScheme ?? "light"].background,
                  textAlign: "center",
                  fontSize: 16,
                  fontWeight: "500",
                }}
              >
                Verify
              </Text>
            </TouchableHighlight>
            
          </View>
          
        </SafeAreaView>
      </View>
    );
  };
  
  export default Verify
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      position: "relative",
    },
    body: {
      flex: 1,
      position: "relative",
      paddingHorizontal: 24,
    },
    inputFile: {
      paddingVertical: 8,
      paddingHorizontal: 10,
      borderRadius: 14,
      borderWidth: 1,
      marginBottom: 10,
    },
  });
  
  