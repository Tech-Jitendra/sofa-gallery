import { create } from "zustand";

import {
    storageHelpers
} from "@/lib/storage";



export interface CartItem {

    id: string;

    name: string;

    price: number;

    quantity: number;

    image: string;

}



interface CartState {


    items: CartItem[];


    addItem:
    (item: CartItem) => void;


    removeItem:
    (id: string) => void;


    clearCart:
    () => void;


    getTotal:
    () => number;

}



const savedCart =
    storageHelpers.get<CartItem[]>(
        "cart"
    );



export const useCartStore =
    create<CartState>((set, get) => ({


        items:
            savedCart ?? [],



        addItem(item) {


            const current =
                get().items;



            const exists =
                current.find(
                    x => x.id === item.id
                );



            let updated;



            if (exists) {


                updated =
                    current.map(
                        x =>

                            x.id === item.id

                                ?

                                {
                                    ...x,
                                    quantity:
                                        x.quantity + 1
                                }

                                :

                                x

                    );


            }

            else {


                updated = [
                    ...current,
                    item
                ];


            }



            storageHelpers.set(
                "cart",
                updated
            );



            set({
                items: updated
            });


        },




        removeItem(id) {


            const updated =
                get()
                    .items
                    .filter(
                        item => item.id !== id
                    );



            storageHelpers.set(
                "cart",
                updated
            );



            set({
                items: updated
            });


        },




        clearCart() {


            storageHelpers.remove(
                "cart"
            );


            set({
                items: []
            });


        },




        getTotal() {


            return get()
                .items
                .reduce(

                    (total, item) =>

                        total +
                        (item.price *
                            item.quantity)

                    ,

                    0

                );


        }



    }));