import { router } from "expo-router";
import React, { useState } from "react";
import {
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
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

import { SafeAreaView } from "react-native-safe-area-context";

import { useTranslation } from "react-i18next";

const { t } = useTranslation();

import i18n from "@/i18n";

export default function LoginScreen() {
    const { theme } = useTheme();
    console.log(
      "Login i18n:",
      i18n.isInitialized,
      i18n.language
    );
    const colors = theme.colors;

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [showPassword, setShowPassword] = useState(false);
    const [remember, setRemember] = useState(false);

    const styles = createStyles(colors);

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar
                barStyle={theme.dark ? "light-content" : "dark-content"}
            />

            <View style={styles.content}>
                <Text style={styles.title}>{t("common.welcomeBack")} 👋</Text>

                <Text style={styles.subtitle}>
                    {t("common.loginToContinue")}
                </Text>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>{t("common.email")}</Text>

                    <TextInput
                        placeholder="john@example.com"
                        placeholderTextColor={colors.textSecondary}
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        style={styles.input}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>{t("common.password")}</Text>

                    <View style={styles.passwordContainer}>
                        <TextInput
                            placeholder={t("common.password")}
                            placeholderTextColor={colors.textSecondary}
                            secureTextEntry={!showPassword}
                            value={password}
                            onChangeText={setPassword}
                            style={styles.passwordInput}
                        />

                        <TouchableOpacity
                            onPress={() => setShowPassword(!showPassword)}
                        >
                            <Text style={styles.showText}>
                                {showPassword ? t("common.hide") : t("common.show")}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.options}>
                    <TouchableOpacity
                        style={styles.remember}
                        onPress={() => setRemember(!remember)}
                    >
                        <View
                            style={[
                                styles.checkbox,
                                remember && {
                                    backgroundColor: colors.primary,
                                    borderColor: colors.primary,
                                },
                            ]}
                        />

                        <Text style={styles.optionText}>
                            {t("common.rememberMe")}
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Text style={styles.forgot}>
                            {t("common.forgotPassword")}
                        </Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity
                    activeOpacity={0.85}
                    style={styles.loginButton}
                    onPress={() => {
                        console.log(email, password);
                    }}
                >
                    <Text style={styles.loginText}>
                        {t("common.login")}
                    </Text>
                </TouchableOpacity>

                <View style={styles.footer}>
                    <Text style={styles.footerText}>
                        {t("common.dontHaveAccount")}
                    </Text>

                    <TouchableOpacity
                        onPress={() => router.push("/(auth)/register")}
                    >
                        <Text style={styles.signup}>
                            {t("common.register")}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}

const createStyles = (colors: any) =>
    StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colors.background,
        },

        content: {
            flex: 1,
            padding: Spacing.lg,
            justifyContent: "center",
        },

        title: {
            fontSize: FontSize.display,
            fontWeight: FontWeight.bold,
            color: colors.text,
            marginBottom: Spacing.sm,
        },

        subtitle: {
            fontSize: FontSize.md,
            color: colors.textSecondary,
            marginBottom: Spacing.xxl,
        },

        inputContainer: {
            marginBottom: Spacing.lg,
        },

        label: {
            marginBottom: Spacing.sm,
            color: colors.text,
            fontSize: FontSize.sm,
            fontWeight: FontWeight.medium,
        },

        input: {
            height: 56,
            borderRadius: Radius.md,
            borderWidth: 1,
            borderColor: colors.border,
            paddingHorizontal: Spacing.md,
            backgroundColor: colors.surface,
            color: colors.text,
            fontSize: FontSize.md,
        },

        passwordContainer: {
            flexDirection: "row",
            alignItems: "center",
            borderWidth: 1,
            borderColor: colors.border,
            borderRadius: Radius.md,
            backgroundColor: colors.surface,
            paddingHorizontal: Spacing.md,
            height: 56,
        },

        passwordInput: {
            flex: 1,
            color: colors.text,
            fontSize: FontSize.md,
        },

        showText: {
            color: colors.primary,
            fontWeight: FontWeight.semibold,
        },

        options: {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: Spacing.xl,
        },

        remember: {
            flexDirection: "row",
            alignItems: "center",
        },

        checkbox: {
            width: 20,
            height: 20,
            borderRadius: 5,
            borderWidth: 1,
            borderColor: colors.border,
            marginRight: Spacing.sm,
        },

        optionText: {
            color: colors.textSecondary,
            fontSize: FontSize.sm,
        },

        forgot: {
            color: colors.primary,
            fontWeight: FontWeight.semibold,
        },

        loginButton: {
            height: 58,
            backgroundColor: colors.primary,
            borderRadius: Radius.md,
            justifyContent: "center",
            alignItems: "center",
            marginBottom: Spacing.xl,
        },

        loginText: {
            color: colors.white,
            fontWeight: FontWeight.bold,
            fontSize: FontSize.lg,
        },

        footer: {
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
        },

        footerText: {
            color: colors.textSecondary,
            fontSize: FontSize.md,
        },

        signup: {
            marginLeft: 5,
            color: colors.primary,
            fontWeight: FontWeight.bold,
            fontSize: FontSize.md,
        },
    });