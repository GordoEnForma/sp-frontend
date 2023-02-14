import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../api/usersApi";

export const useUsers = () => {
    const usersQuery = useQuery(["users"], getUsers, {
        staleTime: 100 * 60 * 30,
    });

    return {
        usersQuery,
    };
};
