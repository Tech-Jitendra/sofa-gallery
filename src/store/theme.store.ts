import { create } from "zustand";

import {
    storageHelpers
} from "@/lib/storage";



interface ThemeState {


    dark: boolean;


    toggleTheme: () => void;


}



const saved =
    storageHelpers.get<boolean>(
        "darkMode"
    );



export const useThemeStore =
    create<ThemeState>((set) => ({


        dark:
            saved ?? false,



        toggleTheme() {


            set(state => {


                const value =
                    !state.dark;


                storageHelpers.set(
                    "darkMode",
                    value
                );



                return {
                    dark: value
                };


            });


        }


    }));