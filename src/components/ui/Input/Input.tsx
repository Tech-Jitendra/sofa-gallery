import React from "react";
import {
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";

import { Colors } from "@/theme/colors";

interface Props {
  label?: string;
  error?: string;
}

export default function Input({
  label,
  error,
  ...props
}: Props &
  React.ComponentProps<typeof TextInput>) {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}

      <TextInput
        style={styles.input}
        placeholderTextColor="#999"
        {...props}
      />

      {!!error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 18,
  },

  label: {
    marginBottom: 8,
    fontWeight: "600",
  },

  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 12,
    paddingHorizontal: 16,
    height: 52,
  },

  error: {
    marginTop: 6,
    color: Colors.danger,
  },
});