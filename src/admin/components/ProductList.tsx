import { Grid, Typography } from "@mui/material";
import { useProducts } from "../hooks";
import { ProductCard } from "./ProductCard";

export const ProductList = () => {
    const { productsQuery } = useProducts();

    if (productsQuery.isLoading) {
        return (
            <Grid item key={"product-loading-"} xs={12}>
                <Typography fontSize={30}>Cargando Productos...</Typography>
            </Grid>
        );
    }

    const products = productsQuery.data?.data || [];
    // console.log(products);

    return products.map(({ nombre, _id }) => (
        <>
            <ProductCard key={_id} title={nombre} id={_id} />
        </>
    ));
};
