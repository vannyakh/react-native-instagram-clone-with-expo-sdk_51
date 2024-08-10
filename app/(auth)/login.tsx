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
const Login = () => {
  const colorScheme = useColorScheme();
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[
          "rgba(255, 255, 255, 0.21)",
          "rgba(240, 232, 244, 0.43)",
          "rgba(245, 225, 251, 1)",
          "rgba(240, 232, 244, 0.62)",
          "rgba(252, 251, 253, 0.14)",
          "rgba(255, 255, 255, 0.2)",
        ]}
        start={[0.76, 0]}
        end={[0.58, 1]}
        style={StyleSheet.absoluteFill}
      />
      <LinearGradient
        colors={["#FFF", "#E1F2FB", "#E8F2FB"]}
        start={[0, -0.0266]}
        end={[1, 0.9459]}
        style={StyleSheet.absoluteFill}
      />
      <SafeAreaView style={styles.body}>
        {/* logo */}
        <View style={styles.logoContainer}>
          <Image
            source={require("@/assets/images/ig_logo.png")}
            style={{ width: 100, height: 100 }}
          />
        </View>
        {/* form */}
        <View style={styles.formContainer}>
          {/* input file */}
          <View
            style={{
              marginBottom: 10,
            }}
          >
            <TextInput
              placeholder="Phone number, username or email"
              style={{
                backgroundColor: Colors[colorScheme ?? "light"].background,
                paddingVertical: 12,
                paddingHorizontal: 10,
                borderRadius: 12,
                borderColor: Colors[colorScheme ?? "light"].tabIconDefault,
                borderWidth: 1,
              }}
            />
          </View>
          {/* input file */}
          <View
            style={{
              marginBottom: 10,
              position: "relative",
            }}
          >
            <TextInput
              placeholder="Password"
              style={{
                backgroundColor: Colors[colorScheme ?? "light"].background,
                paddingVertical: 12,
                paddingHorizontal: 10,
                borderRadius: 12,
                borderColor: Colors[colorScheme ?? "light"].tabIconDefault,
                borderWidth: 1,
              }}
              secureTextEntry={true}
            />
          </View>
          {/* button */}
          <TouchableHighlight
            style={{
              backgroundColor: Colors[colorScheme ?? "light"].primaryColor,
              paddingVertical: 16,
              borderRadius: 40,
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
              Log in
            </Text>
          </TouchableHighlight>
          {/* forgot password */}
          <View
            style={{
              marginTop: 10,
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Text
              style={{
                color: Colors[colorScheme ?? "light"].text,
                fontSize: 15,
                marginTop: 10,
              }}
            >
              Forgot password?
            </Text>
            <Text
              style={{
                color: Colors[colorScheme ?? "light"].primaryColor,
                fontSize: 12,
                marginTop: 10,
              }}
            >
              Get help signing in.
            </Text>
          </View>
        </View>
        {/* end */}
        <View 
          style={styles.styleEnd}
        >
          <TouchableHighlight
            style={{
              paddingVertical: 16,
              borderRadius: 20,
              borderWidth: 1,
              borderColor: Colors[colorScheme ?? "light"].primaryColor,
            }}
            underlayColor={Colors[colorScheme ?? "light"].defaultButton}
            onPress={() => {
              router.push("/(auth)/registers/emailSignup");
            }}
          >
            <Text
              style={{
                color: Colors[colorScheme ?? "light"].primaryColor,
                textAlign: "center",
                fontSize: 16,
                fontWeight: "500",
              }}
            >
              Create New Account
            </Text>
          </TouchableHighlight>
            
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Login;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  body: {
    flex: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  logoContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  formContainer: {
    width: "100%",
    paddingHorizontal: 24,
    flex: 4,
  },
  styleEnd: {
    paddingHorizontal: 24,
    justifyContent: "center",
    width: "100%",
    paddingVertical: 14,
  },
});
