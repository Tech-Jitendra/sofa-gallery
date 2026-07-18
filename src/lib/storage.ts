import AsyncStorage from "@react-native-async-storage/async-storage";

export const storageHelpers = {
  async set(key: string, value: unknown) {
    try {
      await AsyncStorage.setItem(
        key,
        JSON.stringify(value)
      );
    } catch (error) {
      console.error("Storage set error:", error);
    }
  },

  async get<T>(key: string): Promise<T | null> {
    try {
      const value = await AsyncStorage.getItem(key);

      if (!value) {
        return null;
      }

      return JSON.parse(value) as T;
    } catch (error) {
      console.error("Storage get error:", error);
      return null;
    }
  },

  async remove(key: string) {
    try {
      await AsyncStorage.removeItem(key);
    } catch (error) {
      console.error("Storage remove error:", error);
    }
  },
};