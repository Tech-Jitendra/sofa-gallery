import { StyleSheet } from "react-native";

export const createStyles = (colors: any) =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingHorizontal: 20,
      paddingVertical: 16,
      backgroundColor: colors.background,
      borderBottomWidth: 1,
      borderBottomColor: colors.border,
    },

    logo: {
      fontSize: 24,
      fontWeight: "700",
      color: colors.primary,
      letterSpacing: 0.5,
    },

    greeting: {
      marginTop: 4,
      fontSize: 15,
      fontWeight: "500",
      color: colors.textSecondary,
    },

    cartButton: {
      width: 48,
      height: 48,
      borderRadius: 24,
      backgroundColor: colors.surface,
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      borderWidth: 1,
      borderColor: colors.border,
    },

    badge: {
      position: "absolute",
      top: -4,
      right: -4,
      minWidth: 20,
      height: 20,
      borderRadius: 10,
      backgroundColor: colors.danger,
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: 5,
    },

    badgeText: {
      color: colors.white,
      fontSize: 11,
      fontWeight: "700",
    },
  });