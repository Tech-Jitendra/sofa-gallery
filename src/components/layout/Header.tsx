import {
    StyleSheet,
    View
} from "react-native";


import {
    Typography
} from "@/components/ui";


import {
    useTheme
} from "@/theme";



interface Props {

    title: string;

}



export default function Header({
    title
}: Props) {


    const {
        theme
    } = useTheme();



    return (

        <View

            style={[
                styles.container,
                {
                    borderBottomColor:
                        theme.colors.border
                }
            ]}

        >


            <Typography
                variant="title"
            >

                {title}

            </Typography>


        </View>

    );

}



const styles = StyleSheet.create({

    container: {

        height: 60,

        justifyContent: "center",

        borderBottomWidth: 1,

    }

});