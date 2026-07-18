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


const items = [
    "Velvet Sofa",
    "Wooden Table",
    "Designer Chair",
    "Coffee Table"
];


export default function NewArrivals() {

    const {
        theme
    } = useTheme();


    return (

        <FlatList

            horizontal

            data={items}

            showsHorizontalScrollIndicator={false}

            keyExtractor={
                item => item
            }


            ItemSeparatorComponent={() => (
                <View
                    style={{
                        width: Spacing.md
                    }}
                />
            )}


            renderItem={({ item }) => (

                <View
                    style={{
                        width: 150,
                        padding: 20,
                        borderRadius: Radius.md,
                        backgroundColor:
                            theme.colors.surface
                    }}
                >

                    <Text
                        style={{
                            color: theme.colors.text
                        }}
                    >
                        {item}
                    </Text>


                </View>


            )}


        />

    )

}