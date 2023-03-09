import { FC } from "react";
import { Grid, Typography } from "@mui/material";

type Props = {
    index: number;
    title: string;
};

export const TitleAndIndex: FC<Props> = ({ index, title }) => {
    return (
        <Grid
            item
            display={"flex"}
            flexDirection={"column"}
            xs={2}
            minHeight={70}
            sx={{
                // background: "red",
                alignItems: "flex-start",
                justifyContent: "space-evenly",
            }}
        >
            <Typography>Pregunta {index}</Typography>
            <Typography>Tema: {title}</Typography>
        </Grid>
    );
};
