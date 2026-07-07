import React from "react";
import {
    ActivityIndicator,
    Pressable,
    StyleSheet,
    Text,
} from "react-native";

import { Colors } from "@/theme/colors";

interface ButtonProps {
  title: string;
  onPress?: () => void;
  loading?: boolean;
  disabled?: boolean;
  variant?: "primary" | "secondary" | "outline";
}

export default function Button({
  title,
  onPress,
  loading,
  disabled,
  variant = "primary",
}: ButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled || loading}
      style={[
        styles.button,
        variant === "secondary" && styles.secondary,
        variant === "outline" && styles.outline,
      ]}
    >
      {loading ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <Text
          style={[
            styles.text,
            variant === "outline" && { color: Colors.primary },
          ]}
        >
          {title}
        </Text>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 15,
    borderRadius: 14,
    alignItems: "center",
  },

  secondary: {
    backgroundColor: Colors.secondary,
  },

  outline: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: Colors.primary,
  },

  text: {
    color: "white",
    fontWeight: "600",
    fontSize: 16,
  },
});