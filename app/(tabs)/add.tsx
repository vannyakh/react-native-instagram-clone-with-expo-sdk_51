import ModalView from '@/components/ModalView';
import React, { useEffect, useRef, useState } from 'react';
import {
    Animated,
    Button,
    Dimensions,
    FlatList,
    Image,
    LayoutAnimation,
    Modal,
    PanResponder,
    Platform,
    StyleSheet,
    Text,
    TouchableOpacity,
    UIManager,
    View,
    GestureResponderEvent,
    PanResponderGestureState,
} from 'react-native';

const { width, height } = Dimensions.get('screen');

let data = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

if (Platform.OS === 'android') {
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

const Add = () => {
  const [layoutData, setLayoutData] = useState<LayoutData | null>(null);

  return (
    <>
     <View>
            <FlatList
                data={data}
                contentContainerStyle={{ paddingVertical: 20 }}
                keyExtractor={(item) => item.toString()}
                renderItem={() => <RenderItem toggleModal={setLayoutData} />}
                numColumns={2}
            />
            {layoutData !== null && (
                <ModalView layoutData={layoutData} close={() => setLayoutData(null)} />
            )}
        </View>
    </>
  )
}


type RenderItemProps = {
  toggleModal: (data: LayoutData) => void;
};

class RenderItem extends React.Component<RenderItemProps> {
  itemRef: TouchableOpacity | null = null;

  shouldComponentUpdate = () => false;

  onPress = () => {
      const { toggleModal } = this.props;
      if (this.itemRef) {
          this.itemRef.measureInWindow((x, y, _width, _height) => {
              toggleModal({
                  x,
                  y,
                  _width,
                  _height,
              });
          });
      }
  };

  render() {
      return (
          <View style={styles.item}>
              <TouchableOpacity
                  ref={(e) => (this.itemRef = e)}
                  style={{ flex: 1, backgroundColor: '#ddd' }}
                  onPress={this.onPress}
                  onLongPress={this.onPress}
                  activeOpacity={0.7}
              >
                  <Image
                      source={{
                          uri: 'https://images.pexels.com/photos/1172064/pexels-photo-1172064.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                      }}
                      resizeMode="cover"
                      style={styles.fill}
                  />
              </TouchableOpacity>
          </View>
      );
  }
}

export default Add


const styles = StyleSheet.create({
  item: {
      height: width / 2,
      flex: 1,
      padding: 3,
  },
  close: {
      position: 'absolute',
      right: 10,
      top: 10,
  },
  center: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
  },
  fill: {
      height: '100%',
      width: '100%',
      position: 'absolute',
  },
  label: {
      color: '#fff',
      fontSize: 20,
      marginTop: 100,
  },
});