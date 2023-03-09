import { Button, Grid } from "@mui/material";

export const JustificationButton = () => {
    return (
        <Grid
            item
            display={"flex"}
            flexDirection={"column"}
            xs={2}
            height={70}
            sx={{
                position: "relative",
                // background: "purple",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Button
                variant="contained"
                sx={{
                    height: 40,
                    position: "absolute",
                    // left: 50,
                    top: 20,
                }}
            >
                {" "}
                Justificación
            </Button>
        </Grid>
    );
};
