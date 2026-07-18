import React from "react";

import {
    RefreshControl,
    ScrollView,
    StyleSheet,
} from "react-native";

import {
    SafeAreaView,
} from "react-native-safe-area-context";


import AppHeader from "@/features/home/components/AppHeader/AppHeader";
import CategoryList from "@/features/home/components/CategoryList/CategoryList";
import FlashSale from "@/features/home/components/FlashSale/FlashSale";
import HeroCarousel from "@/features/home/components/HeroCarousel/HeroCarousel";
import SearchBar from "@/features/home/components/SearchBar/SearchBar";


import {
    useTheme
} from "@/theme";

console.log("Home screen rendered");
export default function Home() {

    const {
        theme
    } = useTheme();

    const colors = theme.colors;

    const [refreshing, setRefreshing] =
        React.useState(false);



    const onRefresh = async () => {
        setRefreshing(true);
        // later:
        // refetch products/categories
        setTimeout(() => {
            setRefreshing(false);
        },800);
    };



    return (

        <SafeAreaView
            style={[
                styles.container,
                {
                    backgroundColor:
                        colors.background
                }
            ]}
        >

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={
                    styles.content
                }
                refreshControl={
                    <RefreshControl
                        refreshing={
                            refreshing
                        }
                        onRefresh={
                            onRefresh
                        }
                        tintColor={
                            colors.primary
                        }
                    />
                }
            >
                <AppHeader
                    cartCount={3}
                />
                <SearchBar />
                <HeroCarousel />
                <CategoryList />
                <FlashSale />
            </ScrollView>


        </SafeAreaView>

    );
}



const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    content:{
        paddingBottom:100,
    }
});