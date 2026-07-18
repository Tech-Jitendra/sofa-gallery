import { create } from "zustand";
import {
    createJSONStorage,
    persist,
} from "zustand/middleware";

import AsyncStorage from "@react-native-async-storage/async-storage";


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

    updateQuantity:
    (id: string, quantity: number) => void;

    getTotal:
    () => number;

}


export const useCartStore =
    create<CartState>()(

        persist(

            (set, get) => ({


                items: [],



                addItem(item) {


                    const current =
                        get().items;


                    const exists =
                        current.find(
                            x => x.id === item.id
                        );



                    if (exists) {


                        set({

                            items:
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

                                )

                        });


                    }

                    else {


                        set({

                            items: [
                                ...current,
                                item
                            ]

                        });


                    }

                },




                removeItem(id) {


                    set({

                        items:
                            get()
                                .items
                                .filter(
                                    item =>
                                        item.id !== id
                                )

                    });


                },




                updateQuantity(
                    id,
                    quantity
                ) {


                    if (quantity <= 0) {

                        get()
                            .removeItem(id);

                        return;
                    }



                    set({

                        items:
                            get()
                                .items
                                .map(
                                    item =>

                                        item.id === id

                                            ?

                                            {
                                                ...item,
                                                quantity
                                            }

                                            :

                                            item

                                )

                    });


                },




                clearCart() {


                    set({
                        items: []
                    });


                },




                getTotal() {


                    return get()
                        .items
                        .reduce(

                            (
                                total,
                                item
                            ) =>

                                total +
                                (
                                    item.price *
                                    item.quantity
                                ),

                            0

                        );


                }


            }),


            {

                name: "cart-storage",


                storage:
                    createJSONStorage(
                        () =>
                            AsyncStorage
                    ),

            }

        )

    );