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
import CategoryList from "@/features/home/components/CategoryList/CategoryList";
import FlashSale from "@/features/home/components/FlashSale/FlashSale";
import HeroCarousel from "@/features/home/components/HeroCarousel/HeroCarousel";
import SearchBar from "@/features/home/components/SearchBar/SearchBar";


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



    const [refreshing, setRefreshing] =
        React.useState(false);



    const onRefresh = async () => {

        setRefreshing(true);


        // later:
        // await refetch products


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


                showsVerticalScrollIndicator={false}


                refreshControl={

                    <RefreshControl

                        refreshing={refreshing}

                        onRefresh={onRefresh}

                        tintColor={
                            colors.primary
                        }

                    />

                }


                contentContainerStyle={{
                    paddingBottom: 120
                }}

            >


                <AppHeader
                    cartCount={3}
                />



                {/* Welcome */}

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




                <SearchBar />



                {/* Hero */}

                <View
                    style={styles.section}
                >

                    <ScreenSection>
                        <HeroCarousel />
                    </ScreenSection>

                </View>




                {/* Categories */}

                <SectionTitle
                    title="Shop by Category"
                    color={colors.text}
                />


                <ScreenSection>
                    <CategoryList />
                </ScreenSection>


                {/* Flash Sale */}

                <SectionTitle
                    title="Flash Sale 🔥"
                    color={colors.text}
                />


                <ScreenSection>
                    <FlashSale />
                </ScreenSection>



                {/* Feature cards */}

                <View
                    style={styles.cards}
                >


                    <FeatureCard

                        title="Free Delivery"

                        subtitle="Across India"

                        color={colors.success}

                    />


                    <FeatureCard

                        title="Easy Returns"

                        subtitle="30 days policy"

                        color={colors.warning}

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
                style={styles.featureTitle}
            >
                {title}
            </Text>


            <Text
                style={styles.featureSubtitle}
            >
                {subtitle}
            </Text>


        </View>

    );

}






const styles = StyleSheet.create({


    container: {
        flex: 1,
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



    section: {

        marginTop:
            Spacing.md,

    },



    sectionTitle: {

        fontSize:
            FontSize.lg,

        fontWeight:
            FontWeight.bold,

        marginHorizontal:
            Spacing.md,

        marginTop:
            Spacing.lg,

        marginBottom:
            Spacing.md,

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

        borderWidth:
            1,

        borderRadius:
            Radius.md,

        padding:
            Spacing.md,

    },


    featureTitle: {

        fontWeight:
            "700",

    },


    featureSubtitle: {

        marginTop:
            4,

        color:
            "#777",

    },


});