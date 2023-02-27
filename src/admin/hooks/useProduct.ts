import { useQuery } from "@tanstack/react-query";
import { getCategories, getProductById } from "../api";
import { SpecificProduct, Temas } from "../interfaces";

export const useProduct = (productId: string) => {

    const categoriesForProductQuery = useQuery<Temas>(["categories-for-product", productId], getCategories, {
        staleTime: 100 * 60 * 60
    })
    const productQuery = useQuery<SpecificProduct>(
        ["products", productId],
        () => getProductById(productId),
        {
            staleTime: 100 * 60 * 60,
        }
    );

    return {
        categoriesForProductQuery,
        productQuery,
    };
};