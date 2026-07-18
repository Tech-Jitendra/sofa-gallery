import { Typography } from "@/components/ui";
import { useAuthStore } from "@/store/auth.store";
import { router } from "expo-router";
import { useEffect } from "react";
import { ActivityIndicator, View } from "react-native";


export default function Splash() {

    const token = useAuthStore(
        state => state.token
    );


    useEffect(() => {
        const timer = setTimeout(() => {
            if (!token) {
                router.replace("/(tabs)/home");
            } else {
                router.replace("/(auth)/login");
            }
        }, 1000);
        return () => clearTimeout(timer);
    }, [token]);



    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
            }}
        >
            <Typography
                variant="display"
            >
                Sofa Gallery
            </Typography>

            <ActivityIndicator
                style={{
                    marginTop: 20
                }}
            />
        </View>
    );
}