import axios from "axios";

interface DataSchema {
    studentId?: string;
    nombre: string;
    apellido: string;
    email: string;
    contrasena: string;
    estado?: string;
    product?: string;
    productId: string;
    telefono: number;
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
    nombre,
    apellido,
    email,
    contrasena,
    estado,
    productId,
    telefono,
}: DataSchema) => {
    console.log(productId);
    const { data } = await userApi.post("estudiante", {
        nombre,
        apellido,
        email,
        contrasena,
        estado,
        producto: productId,
        telefono,
    });
    return data;
};
export const updateUser = async ({
    studentId,
    nombre,
    apellido,
    email,
    contrasena,
    estado,
    productId,
    telefono,
}: DataSchema) => {
    const { data } = await userApi.put(`estudiante/${studentId}`, {
        nombre,
        apellido,
        email,
        contrasena,
        estado,
        producto: productId,
        telefono,
    });
    return data;
};
