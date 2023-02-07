import { Grid, List, ListItem, ListItemText, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { useProducts } from "../hooks";

export const EditProductView = () => {
    const { productId } = useParams();

    const { productQuery } = useProducts(productId);

    if (productQuery?.isLoading) {
        return (
            <Grid item xs={12}>
                <Typography>Cargando...</Typography>
            </Grid>
        );
    }
    const productData = productQuery?.data.data;

    // console.log(productId);
    return (
        <>
            <Grid item xs={12}>
                <Typography component={"span"} variant="h5">
                    Nombre:{" "}
                </Typography>
                <Typography variant="h4" display="inline" fontWeight={"bold"}>
                    {productData.nombre}
                </Typography>
                <Grid container>
                    <List>
                        {productData.temas.map((tema) => (
                            <ListItem>
                                <ListItemText>{tema.nombre}</ListItemText>
                            </ListItem>
                        ))}
                    </List>
                </Grid>
            </Grid>
        </>
    );
};
