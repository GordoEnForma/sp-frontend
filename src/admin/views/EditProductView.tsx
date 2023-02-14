import { Grid, List, ListItem, ListItemText, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { useProducts } from "../hooks";
import { useCategories } from "../hooks/useCategories";

export const EditProductView = () => {
    const { productId } = useParams();

    const { categoriesQuery } = useCategories();
    const { productQuery } = useProducts(productId);

    if (categoriesQuery.isLoading) {
        return (
            <Grid item xs={12}>
                <Typography variant="h5">Cargando Temas...</Typography>
            </Grid>
        );
    }
    if (productQuery?.isLoading) {
        return (
            <Grid item xs={12}>
                <Typography variant="h5">
                    Cargando Información del Producto...
                </Typography>
            </Grid>
        );
    }

    const productData = productQuery?.data.data;
    const categories = categoriesQuery.data.data;
    // console.log(categories);
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
