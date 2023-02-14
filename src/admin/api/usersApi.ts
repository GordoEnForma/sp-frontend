import axios from "axios";

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

const userApi = axios.create({
    baseURL: "http://localhost:3000/usuarios",
});

export const getUsers = async () => {
    const { data } = await userApi.get("estudiante");
    console.log(data);
    return data;
};

export const postUsers = async ({
    nombres,
    apellidos,
    correo,
    contraseña,
    state,
    productID,
    telefono,
}: DataSchema) => {
    const { data } = await userApi.post("estudiante", {
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
