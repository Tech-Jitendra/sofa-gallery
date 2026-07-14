import { Category } from "../models/category";
import { Product } from "../models/product";


export async function getProducts()
    : Promise<Product[]> {


    const response =
        await fetch(
            "https://api.example.com/products"
        );


    return response.json();

}



export async function getCategories()
    : Promise<Category[]> {

    const response =
        await fetch(
            "https://api.example.com/categories"
        );


    return response.json();

}