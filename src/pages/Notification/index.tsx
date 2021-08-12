import React from "react";
import { SafeAreaView, Text } from "react-native";

import { styles } from "./style";

export function Notification() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Notification</Text>
    </SafeAreaView>
  );
}
