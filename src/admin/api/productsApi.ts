import axios from "axios";

const productsApi = axios.create({
    baseURL: "http://localhost:3000/productos",
});



export const getProducts = async () => {
    const { data } = await productsApi.get("");
    console.log(data);
    return data;
};

export const getProductById = async (productId?: string) => {
    const { data } = await productsApi.get(`${productId}`);
    return data;
};
