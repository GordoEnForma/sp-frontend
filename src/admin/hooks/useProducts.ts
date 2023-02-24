import { useQuery } from "@tanstack/react-query";
import { getProductById, getProducts } from "../api/productsApi";
import { Productos, Producto } from "../interfaces/product";

export const useProducts = (productId?: string) => {
    const productsQuery = useQuery<Productos>(["products"], getProducts, {
        staleTime: 100 * 60 * 60,
    });

    if (!productId) {
        return {
            productsQuery,
        };
    }
    const productQuery = useQuery<Producto>(
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
