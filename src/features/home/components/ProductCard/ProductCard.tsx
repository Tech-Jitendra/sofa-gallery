import React from "react";

import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

import {
    useRouter
} from "expo-router";

import {
    FontSize,
    FontWeight,
    Radius,
    Spacing,
    useTheme,
} from "@/theme";


interface Product {
    id: string | number;
    name: string;
    price: number;
    category?: string;
}


export default function ProductCard({
    product
}: {
    product: Product;
}) {

    const router = useRouter();

    const {
        theme
    } = useTheme();

    const colors = theme.colors;


    return (

        <TouchableOpacity

            activeOpacity={0.8}

            onPress={() => {

                router.push({

                    pathname:
                        "/home/product-details",

                    params: {
                        id: String(product.id)
                    }

                });

            }}

            style={[
                styles.card,
                {
                    backgroundColor:
                        colors.card,

                    borderColor:
                        colors.border
                }
            ]}

        >


            <View
                style={[
                    styles.imagePlaceholder,
                    {
                        backgroundColor:
                            colors.surface
                    }
                ]}
            >

                <Text
                    style={{
                        color:
                            colors.textSecondary
                    }}
                >
                    Sofa
                </Text>

            </View>



            <View
                style={styles.content}
            >

                <Text
                    numberOfLines={1}
                    style={[
                        styles.name,
                        {
                            color:
                                colors.text
                        }
                    ]}
                >
                    {product.name}
                </Text>



                {
                    product.category &&
                    <Text
                        style={[
                            styles.category,
                            {
                                color:
                                    colors.textSecondary
                            }
                        ]}
                    >
                        {product.category}
                    </Text>
                }



                <Text
                    style={[
                        styles.price,
                        {
                            color:
                                colors.primary
                        }
                    ]}
                >
                    ₹ {product.price}
                </Text>


            </View>


        </TouchableOpacity>

    );
}



const styles = StyleSheet.create({

    card: {

        width: 160,

        borderWidth: 1,

        borderRadius:
            Radius.lg,

        overflow:
            "hidden",

        marginRight:
            Spacing.md,

    },


    imagePlaceholder: {

        height: 120,

        justifyContent:
            "center",

        alignItems:
            "center",

    },


    content: {

        padding:
            Spacing.sm,

    },


    name: {

        fontSize:
            FontSize.md,

        fontWeight:
            FontWeight.semibold,

    },


    category: {

        fontSize:
            FontSize.sm,

        marginTop:
            Spacing.xs,

    },


    price: {

        fontSize:
            FontSize.lg,

        fontWeight:
            FontWeight.bold,

        marginTop:
            Spacing.sm,

    },

});