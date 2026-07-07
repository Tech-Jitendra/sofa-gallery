import {
  Stack
} from "expo-router";


import {
  ThemeProvider
} from "@/theme";


import {
  QueryProvider
} from "@/providers";



export default function RootLayout() {


  return (

    <ThemeProvider>


      <QueryProvider>


        <Stack

          screenOptions={{

            headerShown: false

          }}

        >


          <Stack.Screen
            name="splash"
          />


          <Stack.Screen
            name="(auth)"
          />


          <Stack.Screen
            name="(tabs)"
          />


        </Stack>


      </QueryProvider>


    </ThemeProvider>

  );

}