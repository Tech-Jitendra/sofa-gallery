import React from "react";

import {
    Text,
    View
} from "react-native";


const features = [
    "🚚 Free Delivery",
    "🔒 Secure Payment",
    "↩ Easy Returns",
    "⭐ Premium Quality"
];


export default function WhyChooseUs() {

    return (

        <View>

            {
                features.map(item => (

                    <Text
                        key={item}
                        style={{
                            marginBottom: 12,
                            fontSize: 16
                        }}
                    >
                        {item}
                    </Text>

                ))
            }

        </View>

    )

}