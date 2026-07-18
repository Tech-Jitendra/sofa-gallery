import React from "react";

import {
    RefreshControl,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";


import {
    SafeAreaView,
} from "react-native-safe-area-context";


import AppHeader from "@/features/home/components/AppHeader/AppHeader";
import SearchBar from "@/features/home/components/SearchBar/SearchBar";

import CategoryList from "@/features/home/components/CategoryList/CategoryList";
import FlashSale from "@/features/home/components/FlashSale/FlashSale";
import HeroCarousel from "@/features/home/components/HeroCarousel/HeroCarousel";

import BestSellers from "@/features/home/components/BestSellers/BestSellers";
import BrandList from "@/features/home/components/BrandList/BrandList";
import NewArrivals from "@/features/home/components/NewArrivals/NewArrivals";
import PopularCollections from "@/features/home/components/PopularCollections/PopularCollections";
import ReviewCarousel from "@/features/home/components/ReviewCarousel/ReviewCarousel";
import RoomInspiration from "@/features/home/components/RoomInspiration/RoomInspiration";
import WhyChooseUs from "@/features/home/components/WhyChooseUs/WhyChooseUs";


import ScreenSection from "@/components/ui/ScreenSection";


import {
    FontSize,
    FontWeight,
    Radius,
    Spacing,
    useTheme,
} from "@/theme";



export default function Home() {


    const {
        theme
    } = useTheme();


    const colors =
        theme.colors;



    const [
        refreshing,
        setRefreshing
    ] = React.useState(false);



    const onRefresh = () => {


        setRefreshing(true);


        // Later:
        // refetch home api


        setTimeout(() => {

            setRefreshing(false);

        }, 800);


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


                showsVerticalScrollIndicator={
                    false
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



                contentContainerStyle={{

                    paddingBottom:
                        120

                }}

            >




                {/* Header */}

                <AppHeader

                    cartCount={3}

                />





                {/* Welcome Card */}


                <View

                    style={[
                        styles.welcome,
                        {
                            backgroundColor:
                                colors.surface
                        }
                    ]}

                >


                    <Text

                        style={[
                            styles.greeting,
                            {
                                color:
                                    colors.text
                            }
                        ]}

                    >

                        Make your home beautiful ✨

                    </Text>



                    <Text

                        style={[
                            styles.subtitle,
                            {
                                color:
                                    colors.textSecondary
                            }
                        ]}

                    >

                        Discover premium sofas
                        designed for comfort

                    </Text>


                </View>





                {/* Search */}


                <SearchBar />


                {/* Hero */}


                <SectionTitle

                    title="Featured"

                    color={
                        colors.text
                    }

                />


                <ScreenSection>

                    <HeroCarousel />

                </ScreenSection>







                {/* Categories */}


                <SectionTitle

                    title="Shop by Category"

                    color={
                        colors.text
                    }

                />


                <ScreenSection>

                    <CategoryList />

                </ScreenSection>







                {/* Collections */}


                <SectionTitle

                    title="Popular Collections"

                    color={
                        colors.text
                    }

                />


                <ScreenSection>

                    <PopularCollections />

                </ScreenSection>







                {/* Flash Sale */}


                <SectionTitle

                    title="Flash Sale 🔥"

                    color={
                        colors.text
                    }

                />


                <ScreenSection>

                    <FlashSale />

                </ScreenSection>







                {/* Best Sellers */}



                <SectionTitle

                    title="Best Sellers ⭐"

                    color={
                        colors.text
                    }

                />


                <ScreenSection>

                    <BestSellers />

                </ScreenSection>







                {/* New Arrivals */}



                <SectionTitle

                    title="New Arrivals ✨"

                    color={
                        colors.text
                    }

                />


                <ScreenSection>

                    <NewArrivals />

                </ScreenSection>







                {/* Room Inspiration */}



                <SectionTitle

                    title="Room Inspiration 🏠"

                    color={
                        colors.text
                    }

                />


                <ScreenSection>

                    <RoomInspiration />

                </ScreenSection>







                {/* Brands */}



                <SectionTitle

                    title="Top Brands"

                    color={
                        colors.text
                    }

                />


                <ScreenSection>

                    <BrandList />

                </ScreenSection>







                {/* Reviews */}



                <SectionTitle

                    title="Customer Reviews"

                    color={
                        colors.text
                    }

                />


                <ScreenSection>

                    <ReviewCarousel />

                </ScreenSection>







                {/* Why Us */}



                <SectionTitle

                    title="Why Choose Sofa Gallery?"

                    color={
                        colors.text
                    }

                />


                <ScreenSection>

                    <WhyChooseUs />

                </ScreenSection>







                {/* Bottom Feature Cards */}



                <View

                    style={styles.cards}

                >



                    <FeatureCard

                        title="Free Delivery"

                        subtitle="Across India"

                        color={
                            colors.success
                        }

                    />



                    <FeatureCard

                        title="Easy Returns"

                        subtitle="30 days policy"

                        color={
                            colors.warning
                        }

                    />



                </View>




            </ScrollView>


        </SafeAreaView>


    );

}







function SectionTitle({

    title,
    color

}: {

    title: string;

    color: string;

}) {


    return (

        <Text

            style={[
                styles.sectionTitle,
                {
                    color
                }
            ]}

        >

            {title}

        </Text>

    );

}







function FeatureCard({

    title,
    subtitle,
    color

}: {

    title: string;

    subtitle: string;

    color: string;

}) {


    return (

        <View

            style={[
                styles.featureCard,
                {
                    borderColor:
                        color
                }
            ]}

        >

            <Text

                style={
                    styles.featureTitle
                }

            >

                {title}

            </Text>


            <Text

                style={
                    styles.featureSubtitle
                }

            >

                {subtitle}

            </Text>


        </View>

    );

}








const styles = StyleSheet.create({



    container: {
        flex: 1
    },



    welcome: {


        marginHorizontal:
            Spacing.md,


        marginTop:
            Spacing.md,


        padding:
            Spacing.lg,


        borderRadius:
            Radius.lg,


    },



    greeting: {


        fontSize:
            FontSize.xl,


        fontWeight:
            FontWeight.bold,


    },



    subtitle: {


        marginTop:
            Spacing.sm,


        fontSize:
            FontSize.sm,


    },



    sectionTitle: {


        marginHorizontal:
            Spacing.md,


        marginTop:
            Spacing.lg,


        marginBottom:
            Spacing.sm,


        fontSize:
            FontSize.lg,


        fontWeight:
            FontWeight.bold,


    },



    cards: {


        flexDirection:
            "row",


        gap:
            Spacing.md,


        margin:
            Spacing.md,


    },



    featureCard: {


        flex: 1,


        padding:
            Spacing.md,


        borderWidth:
            1,


        borderRadius:
            Radius.md,


    },



    featureTitle: {


        fontWeight:
            FontWeight.bold,


    },



    featureSubtitle: {


        marginTop:
            Spacing.xs,


        color:
            "#777"


    },


});