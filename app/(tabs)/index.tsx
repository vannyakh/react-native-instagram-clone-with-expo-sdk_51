import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  RefreshControl,
  Animated,
  useWindowDimensions,
} from "react-native";
import { Text, View } from "@/components/Themed";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { useColorScheme } from "@/components/useColorScheme";
import Colors from "@/constants/Colors";
import { FontAwesome } from "@expo/vector-icons";
import DropdownMenu from "@/components/dropdown-menu"; 
import { router } from "expo-router";
import { useRef } from "react";
import LottieView from "lottie-react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function Home() {
  const colorScheme = useColorScheme();
  const bounceValue = useRef(new Animated.Value(1)).current;
  const lastTapTimeRef = useRef(0);
  const {width, height} = useWindowDimensions();

  const headleMenu = (e: string) => {
    switch (e) {
      case "1":
        console.log("Report");
        break;
      case "2":
        console.log("Turn on Post Notification");
        break;
      case "3":
        console.log("Copy Link");
        break;
      case "4":
        console.log("Share to...");
        router.push({
          pathname: "/(share)/[share]",
          params: { share: "1" },
        });
        break;
      case "5":
        console.log("Mute");
        break;
      case "6":
        console.log("Unfollow");
        break;
      default:
        break;
    }
  };
  const menus = [
    {
      key: "1",
      title: "Report",
      icon: "report",
    },
    {
      key: "2",
      title: "Turn on Post Notification",
      icon: "notification",
    },
    {
      key: "3",
      title: "Copy Link",
      icon: "copy",
    },
    {
      key: "4",
      title: "Share to...",
      icon: "share",
    },
    {
      key: "5",
      title: "Mute",
      icon: "mute",
    },
    {
      key: "6",
      title: "Unfollow",
      icon: "unfollow",
    },
  ];

  const handlePress = () => {
    Animated.sequence([
      Animated.timing(bounceValue, {
        toValue: 1.2,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(bounceValue, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const handleDoubleTap = () => {
    const now = Date.now();
    if (lastTapTimeRef.current && now - lastTapTimeRef.current < 300) {
      handlePress();
    } else {
      lastTapTimeRef.current = now;
    }
  };
  
  return (
    <View style={[styles.container]}>
    <SafeAreaView 
      edges={["top"]}
    >
      {/* header */}
      <View style={styles.headerTop}>
        {/* logo left */}
        <Image
          source={require("@/assets/images/icons/ig_logo.png")}
          style={{ width: 120, height: 34, resizeMode: "contain" }}
        />
        {/* action right */}
        <View style={styles.actioneRight}>
          <TouchableOpacity>
            <Image
              source={require("@/assets/images/icons/love.png")}
              style={{ width: 26, height: 26, resizeMode: "contain" }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require("@/assets/images/icons/chat.png")}
              style={{ width: 26, height: 26, resizeMode: "contain" }}
            />
          </TouchableOpacity>
        </View>
      </View>
      </SafeAreaView>
      {/* body */}
      <ScrollView
        style={[styles.container]}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={false}
            onRefresh={() => {}}
            colors={[Colors[colorScheme ?? "light"].tint]}
          />
        }
      >
        {/* story */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ paddingVertical: 10, paddingHorizontal: 16 }}
        >
          <TouchableOpacity
            style={{ alignItems: "center", marginHorizontal: 4 }}
          >
            <View
              style={[
                styles.myStory,
                { borderColor: Colors[colorScheme ?? "light"].tint },
              ]}
            >
              <Image
                source={require("@/assets/images/avatars/avata-1.jpg")}
                style={{ width: "100%", height: "100%", borderRadius: 30 }}
              />
              <Pressable
                style={{
                  position: "absolute",
                  bottom: -4,
                  right: -2,
                  backgroundColor: Colors[colorScheme ?? "light"].tint,
                  borderRadius: 50,
                  height: 20,
                  width: 20,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <FontAwesome name="plus" size={12} color="#fff" />
              </Pressable>
            </View>
            <Text style={[styles.storyLabel, { color: "#999" }]}>story</Text>
          </TouchableOpacity>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
            <TouchableOpacity
              style={{ alignItems: "center", marginHorizontal: 4 }}
              key={index}
            >
              <LinearGradient
                colors={["#FF5B5B", "#FFC530"]}
                style={{
                  padding: 1.5,
                  borderRadius: 30,
                }}
              >
                <View style={[styles.story, { borderColor: "#fff" }]}>
                  <Image
                    source={require("@/assets/images/avatars/avata-1.jpg")}
                    style={{ width: "100%", height: "100%", borderRadius: 30 }}
                  />
                </View>
              </LinearGradient>
              <Text style={[styles.storyLabel, { color: "#999" }]}>
                user{index}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        {/* post */}
        <View
          style={{
            paddingVertical: 10,
            paddingHorizontal: 16,
            flexDirection: "column",
            gap: 12,
          }}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
            <View key={index}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  paddingBottom: 10,
                  justifyContent: "space-between",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Image
                    source={require("@/assets/images/avatars/avata-2.jpg")}
                    style={{ width: 40, height: 40, borderRadius: 20 }}
                  />
                  <View>
                    <View>
                      <Text style={{ marginHorizontal: 10 }}>
                        <Text style={{ fontWeight: "bold" }}>
                          {"saanitaaa97"}
                        </Text>
                        <Text>{" 1h"}</Text>
                      </Text>
                    </View>
                  </View>
                </View>
                <View>
                  <DropdownMenu onSelect={headleMenu} items={menus} />
                </View>
              </View>
              <View style={styles.imagePost}>
                <TouchableOpacity
                  style={{ position: "relative" }}
                  activeOpacity={1}
                  onPress={handleDoubleTap}
                >
                  <View style={styles.loveLottis}>
                    {/* <LottieView
                      source={require("@/assets/lotties/love_3.json")}
                      autoPlay={true}
                      loop={true}
                      style={{ width: 200, height: 200 }}
                    /> */}
                  </View>
                  <Image
                    source={require("@/assets/images/posts/post-6.jpg")}
                    style={{ width: "100%", height: 400 }}
                  />
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginVertical: 10,
                }}
              >
                <View style={{ flexDirection: "row", gap: 10 }}>
                  <TouchableOpacity onPress={handlePress}>
                    <Animated.Image
                      source={require("@/assets/images/icons/love.png")}
                      style={{
                        width: 26,
                        height: 26,
                        resizeMode: "contain",
                        transform: [{ scale: bounceValue }],
                      }}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image
                      source={require("@/assets/images/icons/cmm.png")}
                      style={{ width: 26, height: 26, resizeMode: "contain" }}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image
                      source={require("@/assets/images/icons/send.png")}
                      style={{ width: 26, height: 26, resizeMode: "contain" }}
                    />
                  </TouchableOpacity>
                </View>
                <TouchableOpacity>
                  <Image
                    source={require("@/assets/images/icons/save.png")}
                    style={{ width: 26, height: 26, resizeMode: "contain" }}
                  />
                </TouchableOpacity>
              </View>
              <Text style={{ marginVertical: 5 }}>100 likes</Text>
              <Text style={{ marginVertical: 5 }}>
                <Text style={{ fontWeight: "bold" }}>{"SoKeang(IT)"}</Text>
                <Text>{"Hello world, I'm SoKeang(IT) from Cambodia"}</Text>
              </Text>
              <Text style={{ color: "#999" }}>view all 100 comments</Text>
              <Text style={{ color: "#999" }}>1 hour ago</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    maxWidth: 600,
    marginHorizontal: "auto",
  },
  headerTop: {
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
  },
  actioneRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  storyLabel: {
    fontSize: 12,
    fontWeight: "regular",
    marginVertical: 10,
  },
  myStory: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  story: {
    width: 58,
    height: 58,
    borderRadius: 30,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  imagePost: {
    width: "100%",
    height: 400,
    borderRadius: 10,
    overflow: "hidden",
    marginVertical: 10,
  },
  loveLottis: {
    position: "absolute",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2,
    top: 0,
    backgroundColor: "transparent",
  },
});
