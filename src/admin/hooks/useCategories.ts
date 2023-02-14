import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../api/categoriesApi";

export const useCategories = () => {
    const categoriesQuery = useQuery(["categories"], getCategories, {
        staleTime: 100 * 60 * 60,
    });

    return {
        categoriesQuery,
    };
};
