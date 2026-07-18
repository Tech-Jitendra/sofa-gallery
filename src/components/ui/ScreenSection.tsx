import { Spacing } from "@/theme";
import { View } from "react-native";

export default function ScreenSection({
    children
}:{
    children:React.ReactNode;
}){

    return (

        <View
            style={{
                paddingHorizontal:Spacing.md
            }}
        >
            {children}
        </View>

    );

}