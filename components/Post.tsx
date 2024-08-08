import React, { useRef } from "react";
import { Animated, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as DropdownMenu from "zeego/dropdown-menu";

type Props = {
  index: number;
  headleMenu: (key: string) => void;
  menus: Array<{
    key: string;
    title: string;
    icon: string;
    iconAndriod?: string;
  }>;
};

const Post = ({ index, headleMenu }:Props) => {
  const bounceValue = useRef(new Animated.Value(1)).current;

  const handlePress = () => {
    Animated.sequence([
      Animated.timing(bounceValue, {
        toValue: 1.5,
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
    handlePress();
  };

  return (
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
            source={require("@/assets/images/avatars/avata-1.jpg")}
            style={{ width: 40, height: 40, borderRadius: 20 }}
          />
          <View>
            <View>
              <Text style={{ marginHorizontal: 10 }}>
                <Text style={{ fontWeight: "bold" }}>
                  {"SoKeang(IT)"}
                </Text>
                <Text>{" 1h"}</Text>
              </Text>
            </View>
          </View>
        </View>
        <View>
          {/* <DropdownMenu onSelect={headleMenu} items={menus} /> */}
        </View>
      </View>
      <View style={styles.imagePost}>
        <TouchableOpacity activeOpacity={1} onPress={handleDoubleTap}>
          <Image
            source={require("@/assets/images/posts/post-2.jpg")}
            style={{ width: "100%", height: 300 }}
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
              style={{ width: 26, height: 26, resizeMode: "contain", transform: [{ scale: bounceValue }] }}
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
  );
};

export default Post;

const styles = StyleSheet.create({
  imagePost: {
    width: '100%',
    height: 300,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  itemText: {
    fontSize: 16,
  },
});
