import React from "react";
import {
  StyleProp,
  Text,
  TextProps,
  TextStyle,
} from "react-native";

import {
  FontSize,
  FontWeight,
  useTheme,
} from "@/theme";


type Variant =
  | "display"
  | "title"
  | "heading"
  | "body"
  | "caption";


interface Props extends TextProps {

  variant?: Variant;

  color?: string;

  style?: StyleProp<TextStyle>;

}



export default function Typography({

  variant = "body",

  color,

  style,

  children,

  ...props

}: Props) {


  const {
    theme
  } = useTheme();



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
          color:
            color ??
            theme.colors.text,
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