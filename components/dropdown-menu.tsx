import * as DropdownMenu from "zeego/dropdown-menu";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetView,
} from "@gorhom/bottom-sheet";

type Props = {
  items: Array<{
    key: string;
    title: string;
    icon: string;
    iconAndriod?: string;
  }>;
  onSelect: (key: string) => void;
};

const DropDownMenu = ({ items, onSelect }: Props) => {
  const menuSheetRef = React.useRef<BottomSheetModal>(null);
  const snapPointsMenu = React.useMemo(() => ["60%"], []);



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
    <>
      {Platform.OS === "ios" ? (
        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            <TouchableOpacity>
              <MaterialIcons name="more-vert" size={24} color="black" />
            </TouchableOpacity>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content
            align="start"
            side="bottom"
            loop
            alignOffset={0}
            avoidCollisions={true}
            collisionPadding={0}
            sideOffset={0}
          >
            {items.map((item) => (
              <DropdownMenu.Item
                key={item.key}
                textValue={item.title}
                onSelect={() => onSelect(item.key)}
              >
                <View style={styles.menuItem}>
                  <Image source={{ uri: item.icon }} style={styles.icon} />
                  <Text style={styles.itemText}>{item.title}</Text>
                </View>
              </DropdownMenu.Item>
            ))}
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      ) : (
        <>
          <TouchableOpacity
            onPress={() => menuSheetRef.current?.present()}
          >
            <MaterialIcons name="more-vert" size={24} color="black" />
          </TouchableOpacity>
          <BottomSheetModal
            ref={menuSheetRef}
            index={0}
            snapPoints={snapPointsMenu}
          >
            <BottomSheetView style={styles.contentContainer}>
              {items.map((item) => (
                <TouchableOpacity
                  key={item.key}
                  style={styles.menuItem}
                  onPress={() => onSelect(item.key)}
                >
                  <Image source={{ uri: item.icon }} style={styles.icon} />
                  <Text style={styles.itemText}>{item.title}</Text>
                </TouchableOpacity>
              ))}
            </BottomSheetView>
          </BottomSheetModal>
        </>
      )}
    </>
  );
};

export default DropDownMenu;

const styles = StyleSheet.create({
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  itemText: {
    fontSize: 12,
  },
  contentContainer: {
    backgroundColor: "white",
    padding: 10,
  },
});
