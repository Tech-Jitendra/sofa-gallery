import React from "react";

import {
    FlatList,
    StyleSheet,
    Text,
    View,
} from "react-native";

import { Image } from "expo-image";

import {
    FontSize,
    FontWeight,
    Radius,
    Spacing,
    useTheme,
} from "@/theme";


const data = [
    {
        id: "1",
        title: "Luxury Sofa",
        subtitle: "Premium comfort",
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc"
    },
    {
        id: "2",
        title: "Modern Living",
        subtitle: "Elegant designs",
        image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace"
    },
    {
        id: "3",
        title: "Minimal Style",
        subtitle: "Simple beauty",
        image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6"
    }
];


export default function PopularCollections() {

    const {
        theme
    } = useTheme();


    return (

        <FlatList

            horizontal

            showsHorizontalScrollIndicator={false}

            data={data}

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
                                theme.colors.card
                        }
                    ]}
                >

                    <Image

                        source={{
                            uri: item.image
                        }}

                        style={styles.image}

                    />


                    <View
                        style={styles.content}
                    >

                        <Text
                            style={[
                                styles.title,
                                {
                                    color:
                                        theme.colors.text
                                }
                            ]}
                        >
                            {item.title}
                        </Text>


                        <Text
                            style={{
                                color:
                                    theme.colors.textSecondary
                            }}
                        >
                            {item.subtitle}
                        </Text>

                    </View>

                </View>

            )}

        />

    );

}



const styles = StyleSheet.create({

    card: {
        width: 170,
        borderRadius: Radius.lg,
        overflow: "hidden",
    },

    image: {
        height: 120,
        width: "100%"
    },

    content: {
        padding: Spacing.md
    },

    title: {
        fontSize: FontSize.md,
        fontWeight: FontWeight.bold,
    }

});