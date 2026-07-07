import {
    View
} from "react-native";


import {
    Typography
} from "@/components/ui";


export default function Splash() {


    return (

        <View

            style={{

                flex: 1,

                justifyContent: "center",

                alignItems: "center"

            }}

        >


            <Typography
                variant="display"
            >

                Sofa Gallery

            </Typography>


        </View>

    );

}