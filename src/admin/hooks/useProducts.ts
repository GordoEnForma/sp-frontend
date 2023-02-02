import { useQuery } from "@tanstack/react-query";
import { productsApi } from "../api/productsApi";

const getProducts = async () => {
    const { data } = await productsApi.get("");
    console.log(data);
    return data;
};

export const useProducts = () => {
    const productsQuery = useQuery(["products"], getProducts, {
        staleTime: 100 * 60 * 60,
    });

    return {
        productsQuery,
    };
};
