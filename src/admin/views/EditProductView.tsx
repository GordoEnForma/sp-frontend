import { Grid, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

export const EditProductView = () => {
    const { productId } = useParams();

    // console.log(productId);
    return (
        <>
            <Grid item xs={12}>
                <Typography>Vista para editar Productos</Typography>
            </Grid>
        </>
    );
};
