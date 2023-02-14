import { useQuery } from "@tanstack/react-query";
import { getProductById, getProducts } from "../api/productsApi";

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
