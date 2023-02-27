import axios from "axios";
import { SpecificProduct, Productos } from "../interfaces/product";

const productsApi = axios.create({
    baseURL: "http://localhost:3000/productos",
});

export const getProducts = async (): Promise<Productos> => {
    const { data } = await productsApi.get<Productos>("");
    console.log(data);
    return data;
};

export const getProductById = async (productId: string): Promise<SpecificProduct> => {
    const { data } = await productsApi.get<SpecificProduct>(`${productId}`);
    return data;
};
