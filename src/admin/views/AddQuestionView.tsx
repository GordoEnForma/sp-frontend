import {
    Button,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    Typography,
} from "@mui/material";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

type Alternativa = {
    descripcion: string;
    isAnswer?: boolean;
};
type QuestionSchema = {
    orden: number;
    descripcion: string;
    alternativas: Alternativa[];
    opcionCorrecta: string;
    justificacion: string;
};

const opciones = ["A", "B", "C", "D", "E"];

export const AddQuestionView = () => {
    const {
        control,
        setValue,
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
                    descripcion: "",
                    isAnswer: true,
                },
                {
                    descripcion: "",
                    isAnswer: false,
                },
                {
                    descripcion: "",
                    isAnswer: false,
                },
                {
                    descripcion: "",
                    isAnswer: false,
                },
                {
                    descripcion: "",
                    isAnswer: false,
                },
            ],
            opcionCorrecta: "A",
            justificacion: "",
        },
    });

    const handleSelect = async (index: number) => {
        defaultValues?.alternativas?.forEach((_, index) => {
            setValue(`alternativas.${index + 1}.isAnswer`, false);
        });
        setValue(`alternativas.${index}.isAnswer`, true);
    };
    return (
        <>
            <Typography variant="h5" fontWeight={"bold"}>
                Añada una pregunta para este tema
            </Typography>
            {/* <pre>{JSON.stringify(watch(), null, 2)}</pre> */}
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
                    <TextField {...register("orden")} type="number" />
                </Grid>
                {defaultValues?.alternativas?.map((alternativa, index) => (
                    <Grid key={index} item xs={10}>
                        <InputLabel id={alternativa?.descripcion}>
                            Alternativa {opciones[index]}
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
                                    {opciones.map((value, index) => (
                                        <MenuItem
                                            key={value}
                                            value={value}
                                            onClick={() => handleSelect(index)}
                                        >
                                            {value}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        )}
                    />
                </Grid>

                <Grid
                    item
                    xs={10}
                    sx={{
                        height: 450,
                        ".quill": {
                            height: "",
                        },
                        ".ql-toolbar": {
                            background: "#F2F0EB",
                        },
                        ".ql-container": {
                            minHeight: 350,
                            maxHeight: 400,
                            background: "#FFFAFA",

                            // height: 100
                        },
                    }}
                >
                    <InputLabel>Justificación</InputLabel>
                    <Controller
                        control={control}
                        name="justificacion"
                        render={({ field }) => (
                            <ReactQuill theme="snow" {...field} />
                        )}
                    />
                </Grid>

                <Grid
                    item
                    xs={12}
                    display="flex"
                    justifyContent={"center"}
                    sx={{
                        button: {
                            mx: 2,
                        },
                    }}
                >
                    <Button variant="contained">Registrar Pregunta</Button>
                    <Button variant="contained" color="error">
                        Cancelar
                    </Button>
                </Grid>
            </Grid>
        </>
    );
};
