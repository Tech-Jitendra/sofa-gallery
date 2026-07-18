import { router } from "expo-router";
import React, { useState } from "react";
import {
    ScrollView,
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

export default function RegisterScreen() {
  const { theme } = useTheme();
  const colors = theme.colors;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [acceptTerms, setAcceptTerms] = useState(false);

  const styles = createStyles(colors);

  const handleRegister = () => {
    console.log({
      name,
      email,
      password,
      confirmPassword,
      acceptTerms,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle={theme.dark ? "light-content" : "dark-content"}
      />

      <ScrollView
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>Create Account 🛋️</Text>

        <Text style={styles.subtitle}>
          Join Sofa Gallery and start shopping beautiful furniture.
        </Text>

        {/* Name */}

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Full Name</Text>

          <TextInput
            placeholder="John Doe"
            placeholderTextColor={colors.textSecondary}
            value={name}
            onChangeText={setName}
            style={styles.input}
          />
        </View>

        {/* Email */}

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>

          <TextInput
            placeholder="john@example.com"
            placeholderTextColor={colors.textSecondary}
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
            style={styles.input}
          />
        </View>

        {/* Password */}

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password</Text>

          <View style={styles.passwordContainer}>
            <TextInput
              placeholder="Enter password"
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
                {showPassword ? "Hide" : "Show"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Confirm Password */}

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Confirm Password</Text>

          <View style={styles.passwordContainer}>
            <TextInput
              placeholder="Confirm password"
              placeholderTextColor={colors.textSecondary}
              secureTextEntry={!showConfirmPassword}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              style={styles.passwordInput}
            />

            <TouchableOpacity
              onPress={() =>
                setShowConfirmPassword(!showConfirmPassword)
              }
            >
              <Text style={styles.showText}>
                {showConfirmPassword ? "Hide" : "Show"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Terms */}

        <TouchableOpacity
          style={styles.termsRow}
          onPress={() => setAcceptTerms(!acceptTerms)}
        >
          <View
            style={[
              styles.checkbox,
              acceptTerms && {
                backgroundColor: colors.primary,
                borderColor: colors.primary,
              },
            ]}
          />

          <Text style={styles.termsText}>
            I agree to the Terms & Conditions
          </Text>
        </TouchableOpacity>

        {/* Register Button */}

        <TouchableOpacity
          activeOpacity={0.85}
          style={styles.registerButton}
          onPress={handleRegister}
        >
          <Text style={styles.registerText}>
            Create Account
          </Text>
        </TouchableOpacity>

        {/* Footer */}

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Already have an account?
          </Text>

          <TouchableOpacity
            onPress={() => router.replace("/(auth)/login")}
          >
            <Text style={styles.loginText}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
      padding: Spacing.lg,
      paddingVertical: Spacing.xxl,
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
      fontSize: FontSize.sm,
      color: colors.text,
      fontWeight: FontWeight.medium,
    },

    input: {
      height: 56,
      borderRadius: Radius.md,
      borderWidth: 1,
      borderColor: colors.border,
      backgroundColor: colors.surface,
      paddingHorizontal: Spacing.md,
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

    termsRow: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: Spacing.xl,
    },

    checkbox: {
      width: 20,
      height: 20,
      borderRadius: 5,
      borderWidth: 1,
      borderColor: colors.border,
      marginRight: Spacing.sm,
    },

    termsText: {
      flex: 1,
      color: colors.textSecondary,
      fontSize: FontSize.sm,
    },

    registerButton: {
      height: 58,
      borderRadius: Radius.md,
      backgroundColor: colors.primary,
      justifyContent: "center",
      alignItems: "center",
      marginBottom: Spacing.xl,
    },

    registerText: {
      color: colors.white,
      fontSize: FontSize.lg,
      fontWeight: FontWeight.bold,
    },

    footer: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      marginTop: Spacing.md,
    },

    footerText: {
      color: colors.textSecondary,
      fontSize: FontSize.md,
    },

    loginText: {
      marginLeft: 6,
      color: colors.primary,
      fontWeight: FontWeight.bold,
      fontSize: FontSize.md,
    },
  });