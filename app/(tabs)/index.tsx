import { Image, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { Text, useThemeColor, View } from "@/components/Themed";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
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
      {/* body */}
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* story */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ paddingVertical: 10, paddingHorizontal: 16 }}
        >
          <TouchableOpacity
            style={{ alignItems: "center", marginHorizontal: 4 }}
          >
            <View style={[styles.myStory,{borderColor: "#01D5FF",}]}>
              <Image
                source={require("@/assets/images/avatars/avata-1.jpg")}
                style={{ width: "100%", height: "100%", borderRadius: 30 }}
              />
            </View>
            <Text style={[styles.storyLabel, { color: "#999" }]}>story</Text>
          </TouchableOpacity>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item,index) => (
             <TouchableOpacity
             style={{ alignItems: "center", marginHorizontal: 4 }}
             key={index}
           >
             <LinearGradient colors={["#FF5B5B", "#FFC530"]}
               style={{
                 padding: 1.5,
                 borderRadius: 30,
               }}
             > 
               <View style={[styles.story,{borderColor: "#fff",}]}>
                 <Image
                   source={require("@/assets/images/avatars/avata-1.jpg")}
                   style={{ width: "100%", height: "100%", borderRadius: 30 }}
                 />
               </View>
             </LinearGradient>
             <Text
               style={[styles.storyLabel, { color: "#999" }]}
             >user{index}</Text>
           </TouchableOpacity>
          ))}
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
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
});
