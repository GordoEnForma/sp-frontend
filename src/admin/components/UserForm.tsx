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
import { userApi } from "../api/usersApi";

type NameType =
    | "nombres"
    | "apellidos"
    | "correo"
    | "contraseña"
    | "state"
    | "product";

type ValueSchema = {
    value: string;
    title: string;
};

type InputsSchema = {
    labelId: string;
    labelTitle: string;
    type?: string;
    name: NameType;
    values?: ValueSchema[];
};
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
        labelId: "text-password-id",
        labelTitle: "Contraseña",
        type: "text",
        name: "contraseña",
    },
];

const selectInputFields: InputsSchema[] = [
    {
        labelId: "user-products",
        labelTitle: "Productos",
        name: "product",
        values: [
            { value: "oficial", title: "Oficial" },
            { value: "suboficial", title: "Suboficial" },
        ],
    },
    {
        labelId: "user-state",
        labelTitle: "Estado",
        name: "state",
        values: [
            { value: "inactivo", title: "Inactivo" },
            { value: "pendiente", title: "Pendiente" },
            { value: "activo", title: "Activo" },
        ],
    },
];

interface DataSchema {
    nombres: string;
    apellidos: string;
    correo: string;
    contraseña: string;
    state: string;
    product: string;
}
export const UserForm = () => {
    const {
        control,
        handleSubmit,
        formState: { errors, isSubmitting },
        register,
        watch,
    } = useForm({
        defaultValues: {
            nombres: "",
            apellidos: "",
            correo: "",
            contraseña: "",
            state: "activo",
            product: "oficial",
        },
    });

    const onSubmit: SubmitHandler<DataSchema> = async ({
        nombres,
        apellidos,
        correo,
        contraseña,
    }) => {
        try {
            const { data } = await userApi.post("registrar-estudiante", {
                nombre: nombres,
                apellido: apellidos,
                email: correo,
                contrasena: contraseña,
            });
            await sleep(2);
            console.log(data);
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
                mt: 2,
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
                <Grid
                    id="form-box-grid-container"
                    container
                    direction={"row"}
                    gap={3}
                >
                    {textInputFields.map(
                        ({ labelTitle, name, type }: InputsSchema, index) => (
                            <Controller
                                key={index}
                                name={name}
                                control={control}
                                render={({ field }) => (
                                    <Grid item xs={12} lg={5.5}>
                                        <TextField
                                            sx={{
                                                fontWeight: 500,
                                            }}
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

                    {selectInputFields.map(
                        ({ labelTitle, values, name, labelId }, index) => (
                            <Controller
                                key={index}
                                name={name}
                                control={control}
                                render={({ field }) => (
                                    <Grid item xs={12} lg={5.5} sx={{}}>
                                        <FormControl
                                            sx={{
                                                width: "100%",
                                            }}
                                        >
                                            <InputLabel id="products">
                                                {labelTitle}
                                            </InputLabel>
                                            <Select
                                                {...field}
                                                labelId={labelId}
                                                // id="products"
                                                value={watch(name)}
                                            >
                                                {values?.map(
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
                        )
                    )}
                    <Grid item xs={12} justifyContent="center" display={"flex"}>
                        <Button
                            type="submit"
                            sx={{ width: "30%" }}
                            variant="contained"
                            disabled={isSubmitting}
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
