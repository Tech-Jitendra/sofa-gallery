import { Stack } from "expo-router";

import {
  ThemeProvider,
} from "@/theme";


import {
  QueryProvider,
} from "@/providers";



export default function RootLayout() {


  return (

    <ThemeProvider>


      <QueryProvider>


        <Stack

          screenOptions={{
            headerShown: false,
          }}

        />


      </QueryProvider>


    </ThemeProvider>

  );


}