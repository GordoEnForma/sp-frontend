import { useMutation, useQueryClient } from "@tanstack/react-query";
import { userApi } from "../api/usersApi";

interface DataSchema {
    nombres: string;
    apellidos: string;
    correo: string;
    contraseña: string;
    state?: string;
    product?: string;
    productID: string;
    telefono: string;
}

const postUsers = async ({
    nombres,
    apellidos,
    correo,
    contraseña,
    state,
    productID,
    telefono,
}: DataSchema) => {
    const { data } = await userApi.post("registrar-estudiante", {
        nombre: nombres,
        apellido: apellidos,
        email: correo,
        contrasena: contraseña,
        estado: state,
        producto: productID,
        telefono,
    });
    return data;
};

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
