import { useReducer, useState } from "react";
import { FormDataSchema } from "../types/user.types";
import { userFormReducer } from "./userReducer";
import { UserViewContext } from "./UserViewContext";

interface Props {
    children: JSX.Element | JSX.Element[];
}

export const initialState: FormDataSchema = {
    nombre: "",
    apellido: "",
    email: "",
    contrasena: "",
    estado: "activo",
    productId: "63d552325193b6d6ba030fa4",
    telefono: 0,
};

export const UserViewProvider = ({ children }: Props) => {
    const [isUpdating, setIsUpdating] = useState(false);
    const [userFormState, useFormAction] = useReducer(
        userFormReducer,
        initialState
    );
    // const reducer = useReducer();

    return (
        <UserViewContext.Provider
            value={{
                isUpdating,
                setIsUpdating,
                userFormState,
                useFormAction,
            }}
        >
            {children}
        </UserViewContext.Provider>
    );
};
