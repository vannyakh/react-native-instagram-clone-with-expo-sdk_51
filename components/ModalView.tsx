import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  Button,
  Dimensions,
  Image,
  LayoutAnimation,
  Modal,
  PanResponder,
  Platform,
  StyleSheet,
  UIManager,
  View,
  GestureResponderEvent,
  PanResponderGestureState,
} from "react-native";

const { width, height } = Dimensions.get("screen");

if (Platform.OS === "android") {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

type LayoutData = {
  x: number;
  y: number;
  _width: number;
  _height: number;
};

type ModalViewProps = {
  layoutData: LayoutData;
  close: () => void;
};

const ModalView = ({ layoutData, close }: ModalViewProps) => {
  const { x, y, _width, _height } = layoutData;
  const animation = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      LayoutAnimation.easeInEaseOut();
      setExpanded(true);
    }, 10);
  }, []);

  const onRequestClose = () => {
    LayoutAnimation.configureNext(
      LayoutAnimation.create(
        150,
        LayoutAnimation.Types.easeInEaseOut,
        LayoutAnimation.Properties.opacity
      ),
      () => {
        close();
      }
    );
    setExpanded(false);
  };

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([null, { dy: animation.y }], {
        useNativeDriver: false,
      }),
      onPanResponderRelease: (
        e: GestureResponderEvent,
        g: PanResponderGestureState
      ) => {
        if (g.dy > 150) {
          // Swiping downwards
          reset(true, true);
        } else {
          reset(false);
        }
      },
      onPanResponderTerminate: () => {
        reset(false);
      },
    })
  ).current;

  const reset = (closeModal: boolean, down?: boolean) => {
    Animated.spring(animation, {
      toValue: { x: 0, y: closeModal ? height : 0 },
      bounciness: 0,
      useNativeDriver: true,
    }).start(() => {
      if (closeModal) {
        close();
      }
    });
  };

  return (
    <Modal visible onRequestClose={onRequestClose} transparent>
      <View style={[styles.center]} {...panResponder.panHandlers}>
        {expanded && (
          <Animated.View
            style={[StyleSheet.absoluteFill, { backgroundColor: "#000000aa" }]}
          />
        )}
        <Animated.View
          style={[
            expanded
              ? {
                  height: "100%",
                  width: "100%",
                  alignItems: "center",
                }
              : {
                  height: _height,
                  width: _width,
                  left: x,
                  top: y,
                  position: "absolute",
                },
            {
              backgroundColor: "#ccc",
              overflow: "hidden",
              transform: animation.getTranslateTransform(),
            },
          ]}
        >
          <Image
            source={{
              uri: "https://images.pexels.com/photos/1172064/pexels-photo-1172064.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            }}
            resizeMode="cover"
            style={styles.fill}
          />
          {/* {expanded && (
                      <View style={styles.close}>
                          <Button title="Close" onPress={onRequestClose} />
                      </View>
                  )}
                  {expanded && (
                      <Text style={styles.label}>Swipe down to dismiss</Text>
                  )} */}
        </Animated.View>
      </View>
    </Modal>
  );
};

export default ModalView;

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  fill: {
    height: "100%",
    width: "100%",
    position: "absolute",
  },
});
