import React from "react";
import { SafeAreaView, Text } from "react-native";

import { styles } from "./style";

export function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Home</Text>
    </SafeAreaView>
  );
}
