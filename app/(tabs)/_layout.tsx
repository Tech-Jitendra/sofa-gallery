import {
    Tabs
} from "expo-router";


import {
    Home,
    ShoppingCart,
    User
} from "lucide-react-native";



export default function TabLayout() {


    return (

        <Tabs

            screenOptions={{

                headerShown: false,

                tabBarActiveTintColor: "#8B5E3C"

            }}

        >


            <Tabs.Screen

                name="home"

                options={{

                    title: "Home",

                    tabBarIcon: ({ color }) =>

                        <Home color={color} />

                }}

            />



            <Tabs.Screen

                name="cart"

                options={{

                    title: "Cart",

                    tabBarIcon: ({ color }) =>

                        <ShoppingCart color={color} />

                }}

            />



            <Tabs.Screen

                name="profile"

                options={{

                    title: "Profile",

                    tabBarIcon: ({ color }) =>

                        <User color={color} />

                }}

            />



        </Tabs>


    );

}