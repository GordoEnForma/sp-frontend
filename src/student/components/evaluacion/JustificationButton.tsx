import { Button, Grid } from "@mui/material";

export const JustificationButton = () => {
    return (
        <Grid
            item
            display={"flex"}
            flexDirection={"column"}
            xs={2}
            height={40}
            sx={{
                // background: "purple",
                alignItems: "center",
                justifyContent: "flex-end",
            }}
        >
            <Button variant="contained" sx={{
                height:'100%',
            }}> Justificación</Button>
        </Grid>
    );
};
