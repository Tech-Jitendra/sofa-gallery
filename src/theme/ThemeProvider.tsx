import React from "react";

import {
  createContext,
  useContext,
} from "react";


import {
  darkTheme,
  lightTheme
} from "./themes";


import {
  useThemeStore
} from "@/store";



const ThemeContext =
  createContext<any>(null);



export function ThemeProvider({
  children
}: {
  children: React.ReactNode;
}) {


  const {
    dark,
    toggleTheme
  }
    =
    useThemeStore();



  return (

    <ThemeContext.Provider

      value={{

        theme:
          dark
            ?
            darkTheme
            :
            lightTheme,


        toggleTheme

      }}

    >

      {children}

    </ThemeContext.Provider>

  );


}



export function useTheme() {


  return useContext(
    ThemeContext
  );


}