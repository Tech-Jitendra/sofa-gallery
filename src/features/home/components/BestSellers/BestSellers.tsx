import React from "react";

import {
    FlatList,
    StyleSheet,
    Text,
    View
} from "react-native";


import {
    Radius,
    Spacing,
    useTheme
} from "@/theme";


const products = [
    {
        id: "1",
        name: "Royal Brown Sofa",
        price: "₹45,999"
    },
    {
        id: "2",
        name: "Classic L Shape",
        price: "₹62,999"
    },
    {
        id: "3",
        name: "Comfort Chair",
        price: "₹18,999"
    }
];



export default function BestSellers() {

    const {
        theme
    } = useTheme();



    return (

        <FlatList

            horizontal

            showsHorizontalScrollIndicator={false}

            data={products}

            keyExtractor={
                item => item.id
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
                    style={[
                        styles.card,
                        {
                            backgroundColor:
                                theme.colors.surface
                        }
                    ]}
                >

                    <Text
                        style={{
                            color: theme.colors.text,
                            fontWeight: "700"
                        }}
                    >

                        {item.name}

                    </Text>


                    <Text
                        style={{
                            marginTop: 8,
                            color: theme.colors.primary
                        }}
                    >

                        {item.price}

                    </Text>


                </View>

            )}

        />

    )

}



const styles = StyleSheet.create({

    card: {
        width: 160,
        padding: Spacing.md,
        borderRadius: Radius.md
    }

});