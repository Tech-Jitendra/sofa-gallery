import {
    TouchableOpacity
} from "react-native";

import {
    useRouter
} from "expo-router";


export default function ProductCard({
    product
}: {
    product: Product
}) {


    const router =
        useRouter();



    return (

        <TouchableOpacity

            onPress={() => {

                router.push({

                    pathname:
                        "/(tabs)/home/product-details",

                    params: {
                        id: product.id
                    }

                });

            }}

        >

            ...

        </TouchableOpacity>

    )

}