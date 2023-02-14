import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postUsers } from "../api/usersApi";

export const useMutateUsers = () => {
    const queryClient = useQueryClient();

    return useMutation(postUsers, {
        onSuccess(data, variables) {
            const oldData = queryClient.getQueryData(["users"]);
            console.log(data.data);
            let newData = structuredClone(oldData);
            // let newData = JSON.parse(JSON.stringify(oldData));

            newData.data.push(data.data);

            queryClient.setQueryData(["users"], newData);
            // console.log("Todo salio bien!");
        },
    });
};
