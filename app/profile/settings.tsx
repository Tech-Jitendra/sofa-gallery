import React from "react";
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

import {
    FontSize,
    FontWeight,
    Radius,
    Spacing,
    useTheme,
} from "@/theme";

import { useLanguageStore } from "@/store/language.store";

console.log("Settings screen rendered");
export default function SettingsScreen() {

    const { theme } = useTheme();
    const colors = theme.colors;

    const {
        language,
        setLanguage,
    } = useLanguageStore();


    const styles = createStyles(colors);


    return (
        <View style={styles.container}>

            <Text style={styles.title}>
                Settings
            </Text>


            <View style={styles.card}>

                <Text style={styles.heading}>
                    Language
                </Text>


                <TouchableOpacity
                    style={[
                        styles.option,
                        language === "en" && styles.selected
                    ]}
                    onPress={() => setLanguage("en")}
                >

                    <Text style={styles.optionText}>
                        English
                    </Text>

                </TouchableOpacity>



                <TouchableOpacity
                    style={[
                        styles.option,
                        language === "hi" && styles.selected
                    ]}
                    onPress={() => setLanguage("hi")}
                >

                    <Text style={styles.optionText}>
                        हिन्दी
                    </Text>

                </TouchableOpacity>


            </View>

        </View>
    );
}


const createStyles = (colors: any) =>
    StyleSheet.create({

        container: {
            flex: 1,
            backgroundColor: colors.background,
            padding: Spacing.lg,
        },


        title: {
            fontSize: FontSize.xxl,
            fontWeight: FontWeight.bold,
            color: colors.text,
            marginBottom: Spacing.xl,
        },


        card: {
            backgroundColor: colors.card,
            borderRadius: Radius.lg,
            padding: Spacing.lg,
        },


        heading: {
            fontSize: FontSize.lg,
            fontWeight: FontWeight.semibold,
            color: colors.text,
            marginBottom: Spacing.md,
        },


        option: {
            padding: Spacing.md,
            borderRadius: Radius.md,
            marginBottom: Spacing.sm,
            backgroundColor: colors.surface,
        },


        selected: {
            backgroundColor: colors.primary,
        },


        optionText: {
            color: colors.text,
            fontSize: FontSize.md,
        }

    });