export type NameType =
    | "nombres"
    | "apellidos"
    | "correo"
    | "contraseña"
    | "telefono"
    | "state"
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
