import React from "react";

import { Tabs } from "expo-router";

import {
    Home,
    ShoppingCart,
    User
} from "lucide-react-native";

import { useTheme } from "@/theme";
import { View } from "react-native";


export default function TabLayout() {
    const {
        theme
    } = useTheme();
    const colors = theme.colors;

    return (
        <Tabs
            screenOptions={{
                headerShown: false,

                tabBarActiveTintColor: colors.primary,
                tabBarInactiveTintColor: colors.textSecondary,

                tabBarStyle: {
                    backgroundColor: colors.card,
                    borderTopColor: colors.border,

                    height: 70,

                    elevation: 0,
                    shadowOpacity: 0,   // iOS shadow remove

                    position: "absolute",
                },

                tabBarBackground: () => (
                    <View
                        style={{
                            flex: 1,
                            backgroundColor: colors.card,
                        }}
                    />
                ),

            }}
        >
            <Tabs.Screen
                name="home/index"
                options={{
                    title: "Home",
                    tabBarIcon: ({ color, size }) => (
                        <Home
                            color={color}
                            size={size}
                        />
                    ),
                }}
            />


            <Tabs.Screen
                name="cart/index"
                options={{
                    title: "Cart",
                    tabBarIcon: ({ color, size }) => (
                        <ShoppingCart
                            color={color}
                            size={size}
                        />
                    ),
                }}
            />


            <Tabs.Screen
                name="profile/index"
                options={{
                    title: "Profile",
                    tabBarIcon: ({ color, size }) => (
                        <User
                            color={color}
                            size={size}
                        />
                    ),
                }}
            />
        </Tabs>
    );
}