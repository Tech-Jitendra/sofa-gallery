import {
    View
} from "react-native";


import {
    useQuery
} from "@tanstack/react-query";


import {
    Typography
} from "@/components/ui";



export default function QueryTest() {


    const {
        data,
        isLoading,
    } = useQuery({

        queryKey: ["test"],


        queryFn: async () => {


            return {
                message:
                    "React Query Working"
            };


        },


    });



    return (

        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >


            <Typography>

                {
                    isLoading
                        ?
                        "Loading..."
                        :
                        data?.message
                }

            </Typography>


        </View>

    );


}