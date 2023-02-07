import { useQuery } from "@tanstack/react-query";
import { productsApi } from "../api/productsApi";
import { Product, ProductsResponse } from "../types/product.types";

const getProducts = async () => {
    const { data } = await productsApi.get("");
    console.log(data);
    return data;
};

const getProductById = async (productId?: string) => {
    const { data } = await productsApi.get(`${productId}`);
    return data;
};
export const useProducts = (productId?: string) => {
    const productsQuery = useQuery(["products"], getProducts, {
        staleTime: 100 * 60 * 60,
    });

    if (!productId) {
        return {
            productsQuery,
        };
    }
    const productQuery = useQuery(
        ["products", productId],
        () => getProductById(productId),
        {
            staleTime: 100 * 60 * 60,
        }
    );

    return {
        productsQuery,
        productQuery,
    };
};
