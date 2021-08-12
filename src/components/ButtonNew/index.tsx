import React from "react";
import { TouchableOpacity, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { styles } from "./style";

export function ButtonNew() {
  return (
    <View style={styles.container}>
      <Entypo name="plus" style={styles.icon} />
    </View>
  );
}
