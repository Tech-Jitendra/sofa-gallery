import { Radius as radius, Spacing as spacing } from "@/theme";
import { StyleSheet } from "react-native";

export const createStyles = (colors: any) =>
    StyleSheet.create({

        item: {
            alignItems: "center",
            marginRight: spacing.md,
        },


        image: {
            width: 70,
            height: 70,
            borderRadius: radius.sm,
            backgroundColor: colors.surface,
            marginBottom: spacing.sm,
        },


        text: {
            color: colors.text,
            fontSize: 13,
        },

    });