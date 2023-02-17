export type NameType =
    | "nombre"
    | "apellido"
    | "email"
    | "contrasena"
    | "telefono"
    | "estado"
    | "productID";

export type ValueSchema = {
    value: string;
    title: string;
};

export type InputsSchema = {
    id?: string;
    labelId: string;
    labelTitle: string;
    type?: string;
    name: NameType;
    values?: ValueSchema[];
};

export interface FormDataSchema {
    studentId?: string;
    nombre: string;
    apellido: string;
    email: string;
    contrasena: string;
    estado?: string;
    producto?: {
        _id: string;
        nombre: string;
    };
    productId?: string;
    telefono: number;
}
