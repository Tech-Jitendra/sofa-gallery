import React from "react";

import {
  StyleSheet,
  TextInput,
  View,
} from "react-native";


import {
  useTheme,
} from "@/theme";

import Typography from "../Typography/Typography";

interface Props
  extends React.ComponentProps<
    typeof TextInput
  > {

  label?: string;

  error?: string;

}



export default function Input({

  label,

  error,

  style,

  ...props

}: Props) {


  const {
    theme
  } = useTheme();



  return (

    <View
      style={styles.container}
    >

      {
        label &&
        (

          <Typography

            variant="caption"

            style={{
              marginBottom: 8,
              fontWeight: "600",
            }}

          >

            {label}

          </Typography>

        )
      }



      <TextInput


        placeholderTextColor={
          theme.colors.textSecondary
        }


        style={[

          styles.input,

          {

            backgroundColor:
              theme.colors.surface,


            color:
              theme.colors.text,


            borderColor:
              theme.colors.border,

          },

          style,

        ]}


        {...props}

      />



      {
        error &&
        (

          <Typography

            variant="caption"

            color={
              theme.colors.danger
            }

            style={{
              marginTop: 6,
            }}

          >

            {error}

          </Typography>

        )
      }


    </View>

  );

}



const styles = StyleSheet.create({

  container: {

    marginBottom: 18,

  },


  input: {

    height: 52,

    borderWidth: 1,

    borderRadius: 12,

    paddingHorizontal: 16,

    fontSize: 16,

  },


});