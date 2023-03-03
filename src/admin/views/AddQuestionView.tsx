import {
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    Typography,
} from "@mui/material";
import { useForm, SubmitHandler, Controller } from "react-hook-form";

type Alternativa = {
    opcion: "A" | "B" | "C" | "D" | "E";
    descripcion: string;
};
type QuestionSchema = {
    orden: number;
    descripcion: string;
    alternativas: Alternativa[];
    opcionCorrecta: "A" | "B" | "C" | "D" | "E";
    justificacion: string;
};
const opciones = ["A", "B", "C", "D", "E"];

export const AddQuestionView = () => {
    const {
        control,
        register,
        handleSubmit,
        watch,
        formState: { defaultValues },
    } = useForm<QuestionSchema>({
        defaultValues: {
            orden: 0,
            descripcion: "",
            alternativas: [
                {
                    opcion: "A",
                    descripcion: "",
                },
                {
                    opcion: "B",
                    descripcion: "",
                },
                {
                    opcion: "C",
                    descripcion: "",
                },
                {
                    opcion: "D",
                    descripcion: "",
                },
                {
                    opcion: "E",
                    descripcion: "",
                },
            ],
            justificacion: "",
            opcionCorrecta: "A",
        },
    });

    return (
        <>
            <Typography variant="h5" fontWeight={"bold"}>
                Añada una pregunta para este tema
            </Typography>
            <pre>{JSON.stringify(watch(), null, 2)}</pre>
            <Grid
                container
                component={"form"}
                spacing={3}
                marginBottom={3}
                sx={{
                    label: {
                        fontWeight: "bold",
                    },
                }}
            >
                <Grid item xs={12}>
                    <InputLabel>Descripción o título de la pregunta</InputLabel>
                    <TextField
                        multiline
                        fullWidth
                        hiddenLabel
                        {...register("descripcion")}
                    />
                </Grid>
                <Grid item xs={5} sm={5} md={2.3} lg={2.05}>
                    <InputLabel>N° de orden:</InputLabel>
                    <TextField fullWidth />
                </Grid>
                {defaultValues?.alternativas?.map((title, index) => (
                    <Grid key={title?.opcion} item xs={10}>
                        <InputLabel id={title?.opcion}>
                            Alternativa {index + 1}
                        </InputLabel>
                        <TextField
                            multiline
                            fullWidth
                            {...register(`alternativas.${index}.descripcion`)}
                        />
                    </Grid>
                ))}
                <Grid item xs={4}>
                    <InputLabel>Respuesta Correcta:</InputLabel>
                    <Controller
                        control={control}
                        name="opcionCorrecta"
                        render={({ field }) => (
                            <FormControl sx={{ minWidth: 120 }}>
                                <Select
                                    {...field}
                                    displayEmpty
                                    value={watch("opcionCorrecta")}
                                >
                                    {opciones.map((value) => (
                                        <MenuItem key={value} value={value}>
                                            {value}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        )}
                    ></Controller>
                </Grid>
            </Grid>
        </>
    );
};
