import React from "react";
import {
    FlatList,
    Image,
    Text,
    View
} from "react-native";
import CategoryListStyles from "./CategoryList.styles";

const categories = [
    {
        id: "1",
        name: "Fashion",
        image: "https://picsum.photos/100"
    },
    {
        id: "2",
        name: "Electronics",
        image: "https://picsum.photos/101"
    }
];


export default function CategoryList() {

    return (

        <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={categories}

            renderItem={({ item }) => (

                <View style={CategoryListStyles.item}>

                    <Image
                        source={{
                            uri: item.image
                        }}
                        style={CategoryListStyles.image}
                    />

                    <Text>
                        {item.name}
                    </Text>

                </View>

            )}

            keyExtractor={
                item => item.id
            }
        />

    )

}