import { useParams } from "react-router-dom";
import { Grid } from "@mui/material";
import {
    JustificationButton,
    NavQuestions,
    TitleAndIndex,
    SelectQuestion,
} from "../components";

export const RepasoPage = () => {
    const params = useParams();

    return (
        <Grid
            id="exam-container"
            container
            component={"main"}
            sx={{
                // backgroundColor: "cornflowerblue",
                p: 4,
                "div:nth-of-type(3)": {
                    // backgroundColor: "cyan",
                    alignSelf: "flex-end",
                },
            }}
            justifyContent="space-between"
            // alignItems={'center'}
        >
            <Grid
                item
                xs={12}
                sx={{
                    // background: "pink",
                    textAlign: "center",
                    fontSize: 24,
                    mb: 2,
                }}
            >
                Repaso
            </Grid>

            {/* Componente con Indice Pregunta , y Título del Tema */}
            <TitleAndIndex index={1} title="Constitución 2022" />
            {/* Componente para ver Justificación */}
            <JustificationButton />

            {/* Componente para navegar entre preguntas */}

            <NavQuestions currentQuestion={1} totalQuestions={100} />
            {/* Componente para navegar entre preguntas dropList */}

            <SelectQuestion />
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
