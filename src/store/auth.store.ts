import { create } from "zustand";



interface AuthState {

    token: string | null;

    loading: boolean;


    setToken:
    (token: string) => void;


    logout:
    () => void;


}



export const useAuthStore =
    create<AuthState>((set) => ({

        token: null,

        loading: true,


        setToken(token) {

            set({
                token,
                loading: false
            });

        },


        logout() {

            set({

                token: null,

                loading: false

            });

        }


    }));