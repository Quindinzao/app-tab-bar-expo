import React from "react";
import { SafeAreaView, Text } from "react-native";

import { styles } from "./style";

export function Search() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Search</Text>
    </SafeAreaView>
  );
}
