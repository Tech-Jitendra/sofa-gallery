import "@/i18n";

import { Stack } from "expo-router";

import { I18nextProvider } from "react-i18next";

import i18n from "@/i18n";

import { QueryProvider } from "@/providers";
import { ThemeProvider } from "@/theme";


export default function RootLayout() {

  return (
    <I18nextProvider i18n={i18n}>

      <ThemeProvider>

        <QueryProvider>

          <Stack
            screenOptions={{
              headerShown:false
            }}
          />

        </QueryProvider>

      </ThemeProvider>

    </I18nextProvider>
  );
}