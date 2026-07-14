import React from "react";
import {
    Dimensions,
    FlatList,
    Image
} from "react-native";


const banners = [
    {
        id: "1",
        image:
            "https://picsum.photos/800/400",
    },
    {
        id: "2",
        image:
            "https://picsum.photos/801/400",
    },
];


const width =
    Dimensions.get("window").width;


export default function HeroCarousel() {

    return (
        <FlatList
            data={banners}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            autoScroll
            renderItem={({ item }) => (
                <Image
                    source={{
                        uri: item.image
                    }}
                    style={{
                        width,
                        height: 180
                    }}
                />
            )}
            keyExtractor={
                item => item.id
            }
        />
    );

}