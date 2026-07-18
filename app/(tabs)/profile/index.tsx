import {
    Header,
    Screen
} from "@/components/layout";

import {
    Typography
} from "@/components/ui";
import { router } from "expo-router";
import { Text, TouchableOpacity } from "react-native";

console.log("Profile screen rendered");
export default function Profile() {
    return (
        <Screen>
            <Header
                title="Profile"
            />
            <Typography>
                User Profile
            </Typography>

            <TouchableOpacity
                onPress={() =>
                    router.push("/(tabs)/profile/settings")
                }
            >
                <Text>
                    Settings
                </Text>
            </TouchableOpacity>
        </Screen>

    );

}