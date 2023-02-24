import {
    Box,
    Grid,
    List,
    ListItem,
    ListItemText,
    Typography,
} from "@mui/material";
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

    const productData = productQuery?.data?.data;
    const categories = categoriesQuery?.data?.data;

    const selectCategory = (categoryId: string) => {};
    const addCategoriesToProduct = () => {};
    const deleteCategoriesOfProduct = () => {};
    const updateProduct = () => {};
    // console.log(categories);
    return (
        <>
            <Grid item xs={12}>
                <Typography component={"span"} variant="h5">
                    Nombre del Producto:{" "}
                </Typography>
                <Typography variant="h4" display="inline" fontWeight={"bold"}>
                    {productData?.nombre}
                </Typography>
                <Box
                    sx={{
                        my: 2,
                    }}
                >
                    <Grid container>
                        <Grid item xs={6}>
                            <List>
                                <Typography variant="h6">
                                    Temas que puedes añadir:
                                </Typography>
                                {categories?.map((tema) => (
                                    <ListItem>
                                        <ListItemText>
                                            {tema.nombre}
                                        </ListItemText>
                                    </ListItem>
                                ))}
                            </List>
                        </Grid>
                        <Grid item xs={6}>
                            <List>
                                <Typography variant="h6">
                                    Temas añadidos al Producto
                                </Typography>
                                {productData?.temas.map((tema) => (
                                    <ListItem>
                                        <ListItemText>
                                            {tema.nombre}
                                        </ListItemText>
                                    </ListItem>
                                ))}
                            </List>
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
        </>
    );
};
