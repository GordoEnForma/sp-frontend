import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postUsers, updateUser } from "../api/usersApi";

export const useMutateUsers = () => {
    const queryClient = useQueryClient();

    const registerNewUser = useMutation(postUsers, {
        onSuccess(data) {
            const oldData = queryClient.getQueryData(["users"]);
            // console.log(data.data);
            let newData = structuredClone(oldData);
            // let newData = JSON.parse(JSON.stringify(oldData));

            newData.data.push(data.data);

            queryClient.setQueryData(["users"], newData);
            // console.log("Todo salio bien!");
        },
    });

    const updateCurrentUser = useMutation(updateUser, {
        onSuccess(data) {
            const oldData = queryClient.getQueryData(["users"]);
            console.log(data.data);
            // let newData = structuredClone(oldData);

            // newData.data.(data.data);

            // queryClient.setQueryData(["users"], newData);
            // console.log("Todo salio bien!");
        },
    });
    return {
        registerNewUser,
        updateCurrentUser,
    };
};
