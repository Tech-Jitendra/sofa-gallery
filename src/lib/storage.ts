import { MMKV } from "react-native-mmkv";

export const storage = new MMKV();


export const storageHelpers = {

    set(
        key: string,
        value: any
    ) {

        storage.set(
            key,
            JSON.stringify(value)
        );

    },


    get<T>(key: string): T | null {

        const value =
            storage.getString(key);


        if (!value)
            return null;


        return JSON.parse(value);

    },


    remove(key: string) {

        storage.delete(key);

    },


};