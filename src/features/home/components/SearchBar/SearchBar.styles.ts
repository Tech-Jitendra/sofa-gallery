import { StyleSheet } from "react-native";

export const createStyles = (colors: any) =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: colors.surface,
      borderRadius: 14,
      borderWidth: 1,
      borderColor: colors.border,
      paddingHorizontal: 16,
      paddingVertical: 12,
      marginHorizontal: 20,
      marginVertical: 12,
    },

    input: {
      flex: 1,
      marginHorizontal: 12,
      fontSize: 16,
      color: colors.text,
      paddingVertical: 0,
    },
  });