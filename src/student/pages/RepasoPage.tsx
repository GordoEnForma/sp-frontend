import { Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import { JustificationButton, TitleAndIndex } from "../components";

export const RepasoPage = () => {
    const params = useParams();

    return (
        <Grid
            id='exam-container'
            container
            component={"main"}
            sx={{
                backgroundColor: "cornflowerblue",
                p: 4,
                "div:nth-child(3)": {
                    backgroundColor: "cyan",
                    alignSelf:'flex-end'
                },
            }}
            justifyContent="space-between"
        >
            <Grid
                item
                xs={12}
                sx={{
                    background: "pink",
                    
                }}
            >
                Repaso
            </Grid>

            {/* Componente con Indice Pregunta , y Título del Tema */}
            <TitleAndIndex />
            {/* Componente para ver Justificación */}
            <JustificationButton />

            {/* Componente para navegar entre preguntas */}
            <Grid
                item
                xs={2}
                height={70}
                sx={{
                    background: "blue",
                }}
            ></Grid>
            {/* Componente para navegar entre preguntas dropList */}
            <Grid
                item
                xs={2}
                minHeight={70}
                sx={{
                    background: "snow",
                }}
            ></Grid>
            {/* Componente para ver Tiempo, buenas y malas, terminar examen antes */}
            <Grid
                item
                xs={2}
                minHeight={70}
                sx={{
                    background: "green",
                }}
            ></Grid>

            <Grid
                item
                xs={12}
                sx={{
                    background: "orange",
                }}
            >
                {params.temaId}
            </Grid>
        </Grid>
    );
};
