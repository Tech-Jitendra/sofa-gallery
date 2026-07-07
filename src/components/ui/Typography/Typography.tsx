import { Colors } from "@/theme/colors";
import { FontSize, FontWeight } from "@/theme/typography";
import React from "react";
import { Text, TextProps } from "react-native";

type Variant =
  | "display"
  | "title"
  | "heading"
  | "body"
  | "caption";

interface Props extends TextProps {
  variant?: Variant;
  color?: string;
}

export default function Typography({
  variant = "body",
  color = Colors.text,
  style,
  children,
  ...props
}: Props) {
  const variants = {
    display: {
      fontSize: FontSize.display,
      fontWeight: FontWeight.bold,
    },
    title: {
      fontSize: FontSize.xxl,
      fontWeight: FontWeight.bold,
    },
    heading: {
      fontSize: FontSize.xl,
      fontWeight: FontWeight.semibold,
    },
    body: {
      fontSize: FontSize.md,
      fontWeight: FontWeight.regular,
    },
    caption: {
      fontSize: FontSize.sm,
      fontWeight: FontWeight.regular,
    },
  };

  return (
    <Text
      style={[
        {
          color,
        },
        variants[variant],
        style,
      ]}
      {...props}
    >
      {children}
    </Text>
  );
}