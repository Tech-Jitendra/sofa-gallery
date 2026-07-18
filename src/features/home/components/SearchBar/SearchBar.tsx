import React from "react";
import {
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

import { useTheme } from "@/theme";
import { Ionicons } from "@expo/vector-icons";
import { createStyles } from "./SearchBar.styles";
interface Props {
    onSearchPress?: () => void;
}

export default function SearchBar({
    onSearchPress,
}: Props) {
    const { theme } = useTheme();
    const styles = createStyles(theme.colors);
    return (
        <View style={styles.container}>

            <Ionicons
                name="search"
                size={22}
                color="#777"
            />

            <TextInput
                placeholder="Search products..."
                style={styles.input}
                onFocus={onSearchPress}
            />

            <TouchableOpacity>
                <Ionicons
                    name="options-outline"
                    size={24}
                />
            </TouchableOpacity>

        </View>
    );
}