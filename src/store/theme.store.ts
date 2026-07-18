import { create } from "zustand";
import {
    createJSONStorage,
    persist,
} from "zustand/middleware";

import AsyncStorage from "@react-native-async-storage/async-storage";


interface ThemeState {

    dark: boolean;

    toggleTheme: () => void;

}



export const useThemeStore =
    create<ThemeState>()(

        persist(

            (set) => ({


                dark: false,



                toggleTheme() {

                    set(state => ({

                        dark: !state.dark

                    }));

                }


            }),


            {

                name: "theme-storage",


                storage:
                    createJSONStorage(
                        () =>
                            AsyncStorage
                    ),

            }

        )

    );