import React from "react";

import {
    FlatList,
    Text,
    View
} from "react-native";


import {
    Radius,
    Spacing,
    useTheme
} from "@/theme";


const reviews = [
    "Beautiful sofa quality",
    "Fast delivery",
    "Excellent finishing"
];


export default function ReviewCarousel() {

    const {
        theme
    } = useTheme();


    return (

        <FlatList

            horizontal

            data={reviews}

            keyExtractor={
                item => item
            }


            renderItem={({ item }) => (

                <View
                    style={{
                        padding: Spacing.md,
                        marginRight: Spacing.md,
                        backgroundColor:
                            theme.colors.surface,
                        borderRadius: Radius.md
                    }}
                >

                    <Text
                        style={{
                            color:
                                theme.colors.text
                        }}
                    >

                        ⭐ {item}

                    </Text>

                </View>

            )}

        />

    )

}