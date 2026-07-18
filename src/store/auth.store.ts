import { create } from "zustand";
import {
    createJSONStorage,
    persist,
} from "zustand/middleware";

import AsyncStorage from "@react-native-async-storage/async-storage";


export interface User {
    id: string;
    name: string;
    email: string;
}


interface AuthState {

    user: User | null;

    token: string | null;

    loading: boolean;


    setAuth:
    (
        user: User,
        token: string
    ) => void;


    setLoading:
    (loading: boolean) => void;


    logout:
    () => void;

}



export const useAuthStore =
    create<AuthState>()(

        persist(

            (set) => ({


                user: null,


                token: null,


                loading: true,



                setAuth(
                    user,
                    token
                ) {

                    set({

                        user,

                        token,

                        loading: false

                    });

                },



                setLoading(
                    loading
                ) {

                    set({

                        loading

                    });

                },



                logout() {

                    set({

                        user: null,

                        token: null,

                        loading: false

                    });

                }


            }),


            {

                name: "auth-storage",


                storage:
                    createJSONStorage(
                        () =>
                            AsyncStorage
                    ),

            }

        )

    );