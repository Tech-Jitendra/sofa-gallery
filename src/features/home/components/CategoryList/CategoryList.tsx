import { useTheme } from "@/theme";
import React from "react";
import {
    FlatList,
    Image,
    Text,
    View
} from "react-native";
import { createStyles } from "./CategoryList.styles";


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
    const { theme } = useTheme();
    const styles = createStyles(theme.colors);
    return (

        <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={categories}

            renderItem={({ item }) => (

                <View style={styles.item}>

                    <Image
                        source={{
                            uri: item.image
                        }}
                        style={styles.image}
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