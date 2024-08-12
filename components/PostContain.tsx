import { StyleSheet, Text, View } from "react-native";
import React from "react";
import PagerView from "react-native-pager-view";
// props
interface PostContainProps {
  type: string | "text" | "image" | "video"; // type of post contain
  constent: Array<string>; // array of string for post contain
  dubleTap: Function; // function for double tap
  singleTap: Function; // function for single tap
  longPress: Function; // function for long press
  swipeLeft: Function; // function for swipe left
  swipeRight: Function; // function for swipe right
}

const PostContain = (props: PostContainProps) => {
    const doubleTap = () => {
        props.dubleTap();
    }
  return (
    <>
      {/* single */}
      {props.constent.length === 1 && (
        <View>
          <Text>Single</Text>
        </View>
      )}
      {/* multiple */}
      {props.constent.length > 1 && (
        <PagerView style={{ flex: 1 }} initialPage={0}>
          <View key="1">
            <Text>First page</Text>
          </View>
          <View key="2">
            <Text>Second page</Text>
          </View>
        </PagerView>
      )}
      {/* Text */}
      {props.type === "text" && (
        <View>
          <Text>Text</Text>
        </View>
      )}
      {/* Image */}
      {props.type === "image" && (
        <View>
          <Text>Image</Text>
        </View>
      )}
      {/* Video */}
      {props.type === "video" && (
        <View>
          <Text>Video</Text>
        </View>
      )}
    </>
  );
};

export default PostContain;

const styles = StyleSheet.create({});
