import { router } from "expo-router";
import { View } from "react-native";

import { Button } from "@/components/ui";


export default function Home() {

    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                padding: 20
            }}
        >

            <Button
                title="Open UI Preview"
                onPress={() => {
                    router.push("/ui-preview");
                }}
            />

        </View>
    );
}