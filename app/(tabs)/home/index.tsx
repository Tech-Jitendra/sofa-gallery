import React from "react";
import {
    ScrollView
} from "react-native";

import AppHeader from "@/features/home/components/AppHeader/AppHeader";
import CategoryList from "@/features/home/components/CategoryList/CategoryList";
import FlashSale from "@/features/home/components/FlashSale/FlashSale";
import HeroCarousel from "@/features/home/components/HeroCarousel/HeroCarousel";
import SearchBar from "@/features/home/components/SearchBar/SearchBar";


export default function Home() {

    return (

        <ScrollView>

            <AppHeader
                cartCount={3}
            />

            <SearchBar />

            <HeroCarousel />

            <CategoryList />

            <FlashSale />

        </ScrollView>

    )

}