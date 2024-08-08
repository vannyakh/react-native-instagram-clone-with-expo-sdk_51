import * as DropdownMenu from "zeego/dropdown-menu";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

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
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <TouchableOpacity>
          <Image
            source={require("@/assets/images/icons/more.png")}
            style={{ width: 26, height: 26, resizeMode: "contain" }}
          />
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
          <DropdownMenu.Item key={item.key} textValue={item.title} onSelect={() => onSelect(item.key)}>
            <View style={styles.menuItem}>
              <Image source={{ uri: item.icon }} style={styles.icon} />
              <Text style={styles.itemText}>{item.title}</Text>
            </View>
          </DropdownMenu.Item>
        ))}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

export default DropDownMenu;

const styles = StyleSheet.create({
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
    fontSize: 12,
  },
});
