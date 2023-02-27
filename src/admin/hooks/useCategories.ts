import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../api/categoriesApi";
import { Temas } from "../interfaces/tema";

export const useCategories = () => {

    const categoriesQuery = useQuery<Temas>(["categories"], getCategories, {
        staleTime: 100 * 60 * 60,
    });
    return {
        categoriesQuery,
    }

};
