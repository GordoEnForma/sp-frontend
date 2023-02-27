import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../api/productsApi";
import { Productos } from "../interfaces/product";

export const useProducts = () => {

    const productsQuery = useQuery<Productos>(["products"], getProducts, {
        staleTime: 100 * 60 * 60,
    });
    return {
        productsQuery,
    };


};
