import { useForm, Controller, SubmitHandler } from "react-hook-form";
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

const textInputFields: InputsSchema[] = [
    {
        labelId: "text-name-id",
        labelTitle: "Nombres",
        type: "text",
        name: "nombres",
    },
    {
        labelId: "text-lastname-id",
        labelTitle: "Apellidos",
        type: "text",
        name: "apellidos",
    },
    {
        labelId: "text-email-id",
        labelTitle: "Correo",
        type: "email",
        name: "correo",
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
        name: "contraseña",
    },
];

const stateInputValues: InputsSchema = {
    id: "user-state-id",
    labelId: "user-state",
    labelTitle: "Estado",
    name: "state",
    values: [
        { value: "pendiente", title: "Pendiente" },
        { value: "activo", title: "Activo" },
    ],
};

interface DataSchema {
    nombres: string;
    apellidos: string;
    correo: string;
    contraseña: string;
    state: string;
    telefono: string;
    productID: string;
}
export const UserForm = () => {
    const {
        control,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
        watch,
    } = useForm({
        defaultValues: {
            nombres: "",
            apellidos: "",
            correo: "",
            contraseña: "",
            state: "activo",
            productID: "63d552325193b6d6ba030fa4",
            telefono: "",
        },
    });

    const {
        productsQuery: { data },
    } = useProducts();
    const mutation = useMutateUsers();

    const products = data?.data || [];

    const onSubmit: SubmitHandler<DataSchema> = async ({
        nombres,
        apellidos,
        correo,
        contraseña,
        telefono,
        productID,
        state,
    }) => {
        try {
            mutation.mutate({
                nombres,
                apellidos,
                correo,
                contraseña,
                productID,
                telefono,
                state,
            });
            await sleep(1);
            reset();
        } catch (error) {
            console.log(error);
        }
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
                        key={products._id}
                        name={"productID"}
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
                                        value={watch("productID")}
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
                        name={"state"}
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
                                        value={watch("state")}
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
                            sx={{ width: "60%" }}
                        >
                            Crear Usuario
                        </Button>
                    </Grid>
                </Grid>
                {/* <pre>{JSON.stringify(watch(), null, 2)}</pre> */}
            </Box>
        </Grid>
    );
};
