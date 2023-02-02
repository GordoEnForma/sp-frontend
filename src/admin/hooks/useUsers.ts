import { useQuery } from "@tanstack/react-query";
import { userApi } from "../api/usersApi";

const getUsers = async () => {
    const { data } = await userApi.get("/estudiante");
    console.log(data);
    return data;
};

export const useUsers = () => {
    const usersQuery = useQuery(["users"], getUsers, {
        staleTime: 100 * 60 * 30,
    });

    return {
        usersQuery,
    };
};
