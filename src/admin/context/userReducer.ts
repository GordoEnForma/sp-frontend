import { FormDataSchema } from "../types/user.types";
import { initialState } from "./UserProvider";

type FormUserAction =
    | { type: "updateUser"; payload: FormDataSchema }
    | { type: "resetData" };

export const userFormReducer = (
    state: FormDataSchema,
    action: FormUserAction
) => {
    switch (action.type) {
        case "updateUser":
            // console.log("Actualizando un random");
            console.log({ ...action.payload });
            return {
                ...action.payload,
            };
            break;
        case "resetData":
            // console.log(state);
            return { ...initialState };
            break;
        default:
            return state;
            break;
    }
};

// export const aea = "aea";
