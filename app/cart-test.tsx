import {
    Button,
    Typography
} from "@/components/ui";


import {
    useCartStore
} from "@/store";


import {
    View
} from "react-native";



export default function CartTest() {


    const {
        items,
        addItem,
        getTotal
    }
        =
        useCartStore();



    return (

        <View
            style={{
                flex: 1,
                justifyContent: "center",
                padding: 20
            }}
        >


            <Typography>

                Items:
                {items.length}

            </Typography>


            <Button

                title="Add Sofa"

                onPress={() =>


                    addItem({

                        id: "1",

                        name: "Luxury Sofa",

                        price: 45000,

                        quantity: 1,

                        image: ""

                    })


                }

            />



            <Typography>

                Total:
                ₹{getTotal()}

            </Typography>


        </View>

    );

}