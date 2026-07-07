import React from "react";

import {
  StyleSheet,
  View,
  ViewProps,
} from "react-native";

import {
  useTheme
} from "@/theme";



export default function Card({

  children,

  style,

  ...props

}: ViewProps) {


  const {
    theme
  } = useTheme();



  return (

    <View

      style={[
        styles.card,

        {

          backgroundColor:
            theme.colors.card,

          borderColor:
            theme.colors.border,

        },

        style,

      ]}

      {...props}

    >

      {children}

    </View>

  );

}



const styles = StyleSheet.create({

  card: {

    padding: 16,

    borderRadius: 16,

    borderWidth: 1,


    shadowColor: "#000",

    shadowOpacity: 0.08,

    shadowRadius: 10,

    elevation: 3,

  },

});