import React from "react";

import {
    ScrollView,
    StyleSheet,
    View,
} from "react-native";

import {
    useTheme
} from "@/theme";


interface Props {

    children: React.ReactNode;

    scroll?: boolean;

}



export default function Screen({

    children,

    scroll = false

}: Props) {


    const {
        theme
    } = useTheme();



    const content = (

        <View

            style={[
                styles.container,
                {
                    backgroundColor:
                        theme.colors.background
                }
            ]}

        >

            {children}

        </View>

    );



    if (scroll) {

        return (

            <ScrollView

                style={{
                    backgroundColor:
                        theme.colors.background
                }}

                contentContainerStyle={{
                    padding: 20
                }}

            >

                {children}

            </ScrollView>

        );

    }


    return content;


}



const styles = StyleSheet.create({

    container: {

        flex: 1,

        padding: 20,

    }

});