import { useTheme } from "@/theme/ThemeProvider";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { createStyles } from "./AppHeader.styles";

interface Props {
    cartCount?: number;
    userName?: string;
    onCartPress?: () => void;
}

export default function AppHeader({
    cartCount = 0,
    userName = "Guest",
    onCartPress,
}: Props) {

    const { colors } = useTheme();
    const styles = createStyles(colors);

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.logo}>ShopEase</Text>
                <Text style={styles.greeting}>
                    Hello, {userName} 👋
                </Text>
            </View>

            <TouchableOpacity
                style={styles.cartButton}
                onPress={onCartPress}
            >
                <Ionicons name="cart-outline" size={28} />

                {cartCount > 0 && (
                    <View style={styles.badge}>
                        <Text style={styles.badgeText}>
                            {cartCount}
                        </Text>
                    </View>
                )}
            </TouchableOpacity>
        </View>
    );
}