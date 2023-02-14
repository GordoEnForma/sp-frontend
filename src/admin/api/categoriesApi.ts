import axios from "axios";

const categoriesApi = axios.create({
    baseURL: "http://localhost:3000/temas",
});

export const getCategories = async () => {
    const { data } = await categoriesApi.get("");
    return data;
};