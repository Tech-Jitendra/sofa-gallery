// import { colors, radius, spacing } from "@/theme";
import { Radius as radius, Spacing as spacing, useTheme } from "@/theme";
import { StyleSheet } from "react-native";
const theme = useTheme();
const { colors } = theme;

export default StyleSheet.create({
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