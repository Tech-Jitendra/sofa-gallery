import {
    Header,
    Screen
} from "@/components/layout";


import {
    Typography
} from "@/components/ui";

console.log("Cart screen rendered");
export default function Cart() {


    return (

        <Screen>

            <Header
                title="Cart"
            />


            <Typography>

                Your cart is empty

            </Typography>


        </Screen>

    );

}