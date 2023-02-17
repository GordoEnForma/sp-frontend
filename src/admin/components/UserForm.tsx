import {
    useForm,
    Controller,
    SubmitHandler,
    useFormState,
} from "react-hook-form";
import { grey } from "@mui/material/colors";
import {
    Box,
    Button,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    TextField,
} from "@mui/material";
import { sleep } from "../../helpers/sleep";
import { useMutateUsers, useProducts } from "../hooks";
import { InputsSchema } from "../types/user.types";
import { useContext, useEffect, useMemo } from "react";
import { UserViewContext } from "../context/UserViewContext";

const textInputFields: InputsSchema[] = [
    {
        labelId: "text-name-id",
        labelTitle: "Nombres",
        type: "text",
        name: "nombre",
    },
    {
        labelId: "text-lastname-id",
        labelTitle: "Apellidos",
        type: "text",
        name: "apellido",
    },
    {
        labelId: "text-email-id",
        labelTitle: "Correo",
        type: "email",
        name: "email",
    },
    {
        labelId: "text-phone-id",
        labelTitle: "Telefono",
        type: "number",
        name: "telefono",
    },
    {
        labelId: "text-password-id",
        labelTitle: "Contraseña",
        type: "text",
        name: "contrasena",
    },
];

const stateInputValues: InputsSchema = {
    id: "user-state-id",
    labelId: "user-state",
    labelTitle: "Estado",
    name: "estado",
    values: [
        { value: "pendiente", title: "Pendiente" },
        { value: "activo", title: "Activo" },
    ],
};

interface DataSchema {
    _id?: string;
    nombre: string;
    apellido: string;
    email: string;
    contrasena: string;
    estado: string;
    telefono: number;
    productId: string;
}

interface FormProductSchema {
    _id: string;
    nombre: string;
}
export const UserForm = () => {
    const { isUpdating, setIsUpdating, userFormState, useFormAction } =
        useContext(UserViewContext);
    const { registerNewUser, updateCurrentUser } = useMutateUsers();
    const {
        productsQuery: { data },
    } = useProducts();

    // console.log(userFormState);
    const products: FormProductSchema[] = data?.data || [];

    const {
        control,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
        watch,
    } = useForm({
        defaultValues: useMemo(() => {
            return userFormState;
        }, [userFormState]),
    });

    useEffect(() => {
        console.log("Me actualize pes");
        reset(userFormState);
    }, [userFormState]);

    const submitNewUser = async (body: DataSchema) => {
        try {
            registerNewUser.mutate({
                ...body,
            });
        } catch (error) {
            console.log(error);
        }
    };

    const updateUser = async (studentId: string, body: DataSchema) => {
        try {
            updateCurrentUser.mutate({
                studentId,
                ...body,
            });
        } catch (error) {
            console.log(error);
        }
    };

    const cancelUserUpdate = () => {
        setIsUpdating(false);
        useFormAction({ type: "resetData" });
    };

    const onSubmit: SubmitHandler<DataSchema> = async ({
        _id,
        nombre,
        apellido,
        email,
        contrasena,
        telefono,
        productId,
        estado,
    }) => {
        if (!isUpdating) {
            await submitNewUser({
                nombre,
                apellido,
                email,
                contrasena,
                telefono,
                productId,
                estado,
            });
            await sleep(1.5);
            useFormAction({ type: "resetData" });
        } else {
            await updateUser(_id!, {
                nombre,
                apellido,
                email,
                contrasena,
                telefono,
                productId,
                estado,
            });
            await sleep(1.5);
            useFormAction({ type: "resetData" });
            setIsUpdating(false);
        }

        // console.log(_id);
    };

    return (
        <Grid
            item
            xs={12}
            md={7}
            sx={{
                // mt: 2,
                padding: 1,
                bgcolor: grey[300],
                alignItems: "center",
            }}
        >
            <Box
                id="Form-box"
                component="form"
                autoComplete="off"
                noValidate
                onSubmit={handleSubmit(onSubmit)}
            >
                {/* <Grid
                    id="form-box-grid-container"
                    container
                    direction={"row"}
                    justifyContent='center'
                    // gridAutoRows={2}
                    gap={2}
                > */}
                <Grid
                    container
                    alignItems="center"
                    // xs={12}
                    // direction={""}

                    gap={1}
                >
                    {textInputFields.map(
                        ({ labelTitle, name, type }: InputsSchema, index) => (
                            <Controller
                                key={index}
                                name={name}
                                control={control}
                                render={({ field }) => (
                                    <Grid item xs={5.7}>
                                        <TextField
                                            fullWidth
                                            variant={"outlined"}
                                            size="medium"
                                            autoComplete="off"
                                            type={type}
                                            label={labelTitle}
                                            {...field}
                                        />
                                    </Grid>
                                )}
                            />
                        )
                    )}

                    <Controller
                        name={"productId"}
                        control={control}
                        render={({ field }) => (
                            <Grid item xs={5.7} sx={{}}>
                                <FormControl
                                    sx={{
                                        width: "100%",
                                    }}
                                >
                                    <InputLabel id="products">
                                        Productos
                                    </InputLabel>
                                    <Select
                                        {...field}
                                        labelId={"products"}
                                        // id="products"
                                        value={watch("productId")}
                                    >
                                        {products.map(({ _id, nombre }) => (
                                            <MenuItem key={_id} value={_id}>
                                                {nombre}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>
                        )}
                    />
                    <Controller
                        key={stateInputValues.id}
                        name={"estado"}
                        control={control}
                        render={({ field }) => (
                            <Grid item xs={5.7} sx={{}}>
                                <FormControl
                                    sx={{
                                        width: "100%",
                                    }}
                                >
                                    <InputLabel id="products">
                                        {stateInputValues.labelTitle}
                                    </InputLabel>
                                    <Select
                                        {...field}
                                        labelId={stateInputValues.labelId}
                                        // id="products"
                                        value={watch("estado")}
                                    >
                                        {stateInputValues.values?.map(
                                            ({ title, value }) => (
                                                <MenuItem
                                                    key={value}
                                                    value={value}
                                                >
                                                    {title}
                                                </MenuItem>
                                            )
                                        )}
                                    </Select>
                                </FormControl>
                            </Grid>
                        )}
                    />
                    {isUpdating ? (
                        <>
                            <Grid
                                item
                                xs={2.85}
                                justifyContent="center"
                                display={"flex"}
                            >
                                <Button
                                    type="submit"
                                    variant="contained"
                                    disabled={isSubmitting}
                                    sx={{
                                        width: "100%",
                                        ":hover": {
                                            backgroundColor: "#2CF264",
                                        },
                                    }}
                                >
                                    Actualizar
                                </Button>
                            </Grid>
                            <Grid
                                item
                                xs={2.85}
                                justifyContent="center"
                                display={"flex"}
                            >
                                <Button
                                    type="button"
                                    variant="contained"
                                    disabled={isSubmitting}
                                    onClick={cancelUserUpdate}
                                    sx={{
                                        width: "100%",
                                        ":hover": {
                                            backgroundColor: "#FF4E47",
                                        },
                                        backgroundColor: "#FF120A",
                                    }}
                                >
                                    Cancelar
                                </Button>
                            </Grid>
                        </>
                    ) : (
                        <Grid
                            item
                            xs={5.7}
                            justifyContent="center"
                            display={"flex"}
                        >
                            <Button
                                type="submit"
                                variant="contained"
                                disabled={isSubmitting}
                                sx={{
                                    width: "60%",
                                    ":hover": { backgroundColor: "#2CF264" },
                                }}
                            >
                                Crear Usuario
                            </Button>
                        </Grid>
                    )}
                </Grid>
                {/* <pre>{JSON.stringify(watch(), null, 2)}</pre> */}
            </Box>
        </Grid>
    );
};
