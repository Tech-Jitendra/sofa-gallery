import React, { useEffect, useState } from "react";
import {
    FlatList,
    Text,
    View
} from "react-native";

import ProductCard from "../ProductCard/ProductCard";


export default function FlashSale() {

    const [time, setTime] = useState(3600);


    useEffect(() => {

        const timer = setInterval(() => {
            setTime(
                prev => prev > 0 ? prev - 1 : 0
            )
        }, 1000);


        return () => clearInterval(timer);

    }, []);



    const products = [
        {
            id: "1",
            name: "Shoes",
            price: 999,
            rating: 4.5,
            discount: 40,
            image: "https://picsum.photos/200"
        }
    ];


    return (

        <View>

            <Text>
                Flash Sale Ends:
                {" "}
                {Math.floor(time / 60)}:
                {time % 60}
            </Text>


            <FlatList
                horizontal
                data={products}
                renderItem={({ item }) =>
                    <ProductCard product={item} />
                }
                keyExtractor={
                    item => item.id
                }
            />


        </View>

    )

}