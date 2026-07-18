import { Stack } from "expo-router";

import { QueryProvider } from "@/providers";
import { ThemeProvider } from "@/theme";


export default function RootLayout() {

    return (

        <ThemeProvider>

            <QueryProvider>

                <Stack
                    screenOptions={{
                        headerShown:false
                    }}
                />

            </QueryProvider>

        </ThemeProvider>

    );

}