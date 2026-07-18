import React from "react";

import {
    FlatList,
    Text
} from "react-native";


const brands = [
    "IKEA",
    "Urban Ladder",
    "Pepperfry",
    "HomeTown"
];


export default function BrandList() {

    return (

        <FlatList

            horizontal

            data={brands}

            keyExtractor={
                item => item
            }

            renderItem={({ item }) => (

                <Text
                    style={{
                        marginRight: 20,
                        fontWeight: "700"
                    }}
                >
                    {item}
                </Text>

            )}

        />

    )

}