import React from "react";
import {
    StyleSheet,
    View,
    ViewProps
} from "react-native";

import {
    Spacing
} from "@/theme";


export default function ScreenSection({
    children,
    style,
    ...props
}: ViewProps) {

    return (

        <View
            style={[
                styles.container,
                style
            ]}
            {...props}
        >

            {children}

        </View>

    );

}


const styles = StyleSheet.create({

    container: {
        marginHorizontal:
            Spacing.md,
    }

});