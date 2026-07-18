import React from "react";

import {
    FlatList,
    View
} from "react-native";

import {
    Image
} from "expo-image";

import {
    Radius
} from "@/theme";


const rooms = [
    "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace",
    "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6"
];


export default function RoomInspiration() {


    return (

        <FlatList

            horizontal

            data={rooms}

            keyExtractor={
                item => item
            }

            showsHorizontalScrollIndicator={false}


            renderItem={({ item }) => (

                <View
                    style={{
                        width: 250,
                        height: 150,
                        borderRadius: Radius.lg,
                        overflow: "hidden"
                    }}
                >

                    <Image

                        source={{
                            uri: item
                        }}

                        style={{
                            width: "100%",
                            height: "100%"
                        }}

                    />


                </View>

            )}

        />

    )

}