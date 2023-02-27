import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../api/categoriesApi";
import { Temas } from "../interfaces/tema";

export const useCategories = (productId?: string) => {
    if (!productId) {
        const categoriesQuery = useQuery<Temas>(["categories"], getCategories, {
            staleTime: 100 * 60 * 60,
        });
        return {
            categoriesQuery,
        }
    }
    const categoriesForProductQuery = useQuery<Temas>(["categories-for-product", productId], getCategories, {
        staleTime: 100 * 60 * 60
    })
    return {
        // categoriesQuery,
        categoriesForProductQuery,
    };
};
