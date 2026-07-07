import React from "react";

import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
} from "react-native";

import {
  useTheme,
} from "@/theme";

import Typography from "../Typography/Typography";

interface ButtonProps {

  title: string;

  onPress?: () => void;

  loading?: boolean;

  disabled?: boolean;

  variant?:
  | "primary"
  | "secondary"
  | "outline"
  | "ghost";

}



export default function Button({

  title,

  onPress,

  loading = false,

  disabled = false,

  variant = "primary",

}: ButtonProps) {


  const {
    theme
  } = useTheme();



  const backgroundColor = {

    primary:
      theme.colors.primary,

    secondary:
      theme.colors.secondary,

    outline:
      "transparent",

    ghost:
      "transparent",

  }[variant];



  const textColor = {

    primary:
      theme.colors.white,

    secondary:
      theme.colors.black,

    outline:
      theme.colors.primary,

    ghost:
      theme.colors.primary,

  }[variant];



  return (

    <Pressable

      disabled={
        disabled || loading
      }

      onPress={onPress}

      style={[
        styles.button,

        {
          backgroundColor,
          borderColor:
            variant === "outline"
              ? theme.colors.primary
              : "transparent",

          opacity:
            disabled
              ? 0.5
              : 1,
        },

        variant === "outline" &&
        styles.outline,

      ]}

    >

      {
        loading ?

          (

            <ActivityIndicator
              color={textColor}
            />

          )

          :

          (

            <Typography

              style={{
                color: textColor,
                fontWeight: "600",
              }}

            >

              {title}

            </Typography>

          )

      }


    </Pressable>

  );

}



const styles = StyleSheet.create({

  button: {

    height: 52,

    borderRadius: 14,

    alignItems: "center",

    justifyContent: "center",

    paddingHorizontal: 20,

  },


  outline: {

    borderWidth: 1,

  },


});